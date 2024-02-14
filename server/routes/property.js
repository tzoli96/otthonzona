const auth = require("../middleware/auth");
const prisma = require("../prisma/prisma");
const settlements = require("../res/settlements");
const { generate8DigitNumericId } = require("../utils/getId");
const router = require("express").Router();
const { logActivity } = require("../models/ActivityLog");

const getValidId = async () => {
  try {
    const id = generate8DigitNumericId() + "";
    const property = await prisma.property.findFirst({
      where: { id, isArchived: false },
      select: { id: true },
    });
    if (property) {
      throw new Error("Already exist");
    }
    return id;
  } catch (err) {
    return getValidId();
  }
};

const getValidReasonEntityId = async () => {
  try {
    const id = generate8DigitNumericId() + "";
    const reasonEntityId = await prisma.PropertyDeleteReasonEntity.findFirst({
      where: { id },
      select: { id: true },
    });
    if (reasonEntityId) {
      throw new Error("Already exist");
    }
    return id;
  } catch (err) {
    return getValidReasonEntityId();
  }
};

router.get("/settlements", async (req, res) => {
  const { q } = req.query;
  if (q) {
    const settlemensOptions = settlements.filter(f => f.value.toLocaleLowerCase().indexOf(q.toLowerCase()) === 0).slice(0, 20);
    res.send(settlemensOptions);
  }
  else {
    res.send(settlements.slice(0, 20));
  }
});

router.post("/", auth, async (req, res) => {
  const id = await getValidId();
  if (req.body.draft_id) {
    try {
      await prisma.DraftProperty.delete({
        where: { id: req.body.draft_id},
      });
    } catch (error) {
      console.error("Hiba a DraftProperty törlése közben:", error);
    } finally {
      delete req.body.draft_id;
    }
  }

  const ad = await prisma.property.create({
    data: {
      id,
      ...req.body,
      submittedBy: req.user.id,
    },
  });

  await logActivity(
      req.user.id,
      "Property Creation",
      `Created  property with id ${id}`
  );

  return res.send({
    status: "SUCCESS",
    data: ad,
  });
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const ad = await prisma.property.findFirst({ where: { id } });

  if (ad.submittedBy !== req.user.id) {
    return res.status(401).send({
      error: true,
      message: "Ezt az ingatlant nincs jogosultságod szerkeszteni.",
    });
  }

  const updatedAd = await prisma.property.update({
    where: { id },
    data: req.body,
  });

  await logActivity(
      req.user.id,
      "Property Updatation",
      `Updated  property with id ${id}`
  );

  return res.send({
    data: updatedAd,
  });
});

router.get("/", async (req, res) => {
  const { offset = 0, limit: inputLimit } = req.query;
  const limit = Math.min(inputLimit || 20, 20);

  const {
    adType,
    propertyType,
    propertyStatus,
    builtYear,
    settlement,
    district,
    ceilingHeight,
    constructionMethod,
    view,
    orientation,
    balcony,
    floor,
    heating,
    minPrice,
    maxPrice,
    minArea,
    maxArea,
  } = req.query;

  const promotedWithFilter = (
      await prisma.property.findMany({
        take: 4,
        where: {
          district,
          isArchived: false,
          bidExpirationTime: { gt: new Date() },
          ...(minPrice && {
            price: {
              gte:
                  (minPrice *
                      (100 - Number(process.env.PRICE_TOLERANCE_PERCENTAGE))) /
                  100,
            },
          }),
          ...(maxPrice && {
            price: {
              lte:
                  (maxPrice *
                      (100 + Number(process.env.PRICE_TOLERANCE_PERCENTAGE))) /
                  100,
            },
          }),
        },
        orderBy: { credit: "desc" },
      })
  ).map((p) => ({ ...p, isPromoted: true }));
  //const promotedWithoutPriceFilter = (promotedWithFilter.length < 4 && (minPrice || maxPrice)) ? await (prisma.property.findMany({
  //  take: 4 - promotedWithFilter.length,
  //  where: {
  //    id: { notIn: promotedWithFilter.map(p => p.id) },
  //    district,
  //    isArchived: false,
  //    bidExpirationTime: { gt: new Date() },
  //  },
  //  orderBy: { credit: "desc" },
  //})).map((p) => ({ ...p, isPromoted: true })) : [];
  const promoted = promotedWithFilter; //.concat(promotedWithoutPriceFilter);

  const where = {
    id: {
      not: { in: promoted.map((p) => p.id) },
    },
    isArchived: false,
    propertyType,
    adType,
    propertyStatus,
    builtYear,
    settlement,
    district,
    ceilingHeight,
    constructionMethod,
    view,
    orientation,
    balcony,
    floor,
    heating,
    ...((minPrice || maxPrice) && {
      price: {
        ...(minPrice && { gte: parseInt(minPrice) }),
        ...(maxPrice && { lte: parseInt(maxPrice) }),
      },
    }),
    ...((minArea || maxArea) && {
      area: {
        ...(minArea && { gte: parseInt(minArea) }),
        ...(maxArea && { lte: parseInt(maxArea) }),
      },
    }),
  };

  const ads = await prisma.property.findMany({
    take: parseInt(limit || 10),
    skip: parseInt(offset || 0),
    where,
  });

  const count = await prisma.property.count({ where });

  const data = promoted.concat(ads);

  return res.send({
    data,
    count,
  });
});

router.get("/member/:memberId", async (req, res) => {
  const {offset = 0, limit: inputLimit, adType} = req.query;
  const limit = Math.min(inputLimit || 20, 20);
  const {memberId} = req.params;

  const member = await prisma.member.findUnique({
    select:{
      user: true
    },
    where: {
      id: memberId,
    },
  });

  if (!member?.user?.id) {
    return res.status(404).json({message: "Member not found"});
  }

  const where = {
    submittedBy: member.user.id,
    isArchived: false,
    adType
  };

  const properties = await prisma.property.findMany({
    where,
    take: parseInt(limit || 10),
    skip: parseInt(offset || 0),
  });

  const count = await prisma.property.count({where});

  return res.send({
    data: properties,
    count,
  });
});

router.get("/homepage-ads", async (req, res) => {
  const totalRequired = 3;

  let promoted = (
      await prisma.property.findMany({
        take: 4,
        where: {
          isArchived: false,
          h_bidExpirationTime: { gt: new Date() },
        },
        orderBy: { credit: "desc" },
        take: totalRequired,
      })
  ).map((p) => ({ ...p, isPromoted: true }));
  if (promoted.length < totalRequired) {
    const remainingProperties = await prisma.property.findMany({
      where: {
        id: { notIn: promoted.map((p) => p.id) },
      },
      take: totalRequired - promoted.length,
    });
    promoted = promoted.concat(remainingProperties);
    return res.send({
      data: promoted,
    });
  } else {
    return res.send({
      data: promoted,
    });
  }
});

router.get("/bid-prices", async (req, res) => {
  const { district } = req.query;
  const promoted = await prisma.property.findMany({
    where: {
      district,
      bidExpirationTime: { gt: new Date() },
      isArchived: false,
    },
    orderBy: { credit: "desc" },
  });
  if (promoted.length > 0) {
    res.send({
      data: promoted.map((ad) => ({ price: ad.credit, id: ad.id })),
    });
  } else {
    res.send({
      data: [{ price: process.env.MIN_BID_PRICE }],
    });
  }
});

router.get("/homepage-bid-prices", async (req, res) => {
  const promoted = await prisma.property.findMany({
    where: {
      h_bidExpirationTime: { gt: new Date() },
      isArchived: false,
    },
    orderBy: { h_credit: "desc" },
  });
  if (promoted.length > 0) {
    res.send({
      data: promoted.map((ad) => ({ price: ad.h_credit, id: ad.id })),
      total: 1,
    });
  } else {
    res.send({
      data: [{ price: process.env.MIN_HOMEPAGE_BID_PRICE }],
      total: 1,
    });
  }
});

router.post("/upgrade-home/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user || {};
  const user = await prisma.user.findFirst({ where: { id: userId } });

  const credit = user?.credit || 0;
  const { bidCredits } = req.body;
  if (bidCredits <= 0) {
    return res.send({
      error: true,
      message: "A minimális kredit mennyiség nem lehet kisebb mint 1.",
    });
  }
  if (credit >= bidCredits) {
    const currentProperty = await prisma.property.findFirst({
      where: { id, isArchived: false },
      select: {
        h_bidExpirationTime: true,
      },
    });

    const isPromotionActive =
        currentProperty?.h_bidExpirationTime &&
        new Date(currentProperty?.h_bidExpirationTime).getTime() > Date.now();

    const property = await prisma.property.update({
      where: { id },
      data: isPromotionActive
          ? {
            h_credit: {
              increment: bidCredits,
            },
          }
          : {
            h_credit: bidCredits,
            h_bidExpirationTime: new Date(Date.now() + 86400 * 1000),
          },
    });
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        credit: { decrement: bidCredits },
      },
    });

    await logActivity(
        req.user.id,
        "Property Upgradetion Home",
        `Upgradeted home property with id ${id}`
    );

    res.status(200).send({
      message: "Hirdetés kiemelve",
      user,
      property,
    });
  } else {
    res.status(400).send({ message: "Nincs elegendő kredit" });
  }
});

router.post("/upgrade/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user || {};
  const user = await prisma.user.findFirst({ where: { id: userId } });

  const credit = user?.credit || 0;
  const { bidCredits } = req.body;
  if (bidCredits <= 0) {
    return res.send({
      error: true,
      message: "A minimális kredit mennyiség nem lehet kisebb mint 1.",
    });
  }
  if (credit >= bidCredits) {
    const currentProperty = await prisma.property.findFirst({
      where: { id, isArchived: false },
      select: {
        bidExpirationTime: true,
      },
    });

    const isPromotionActive =
        currentProperty?.bidExpirationTime &&
        new Date(currentProperty?.bidExpirationTime).getTime() > Date.now();

    const property = await prisma.property.update({
      where: { id },
      data: isPromotionActive
          ? {
            credit: {
              increment: bidCredits,
            },
          }
          : {
            credit: bidCredits,
            bidExpirationTime: new Date(Date.now() + 86400 * 1000),
          },
    });
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        credit: { decrement: bidCredits },
      },
    });

    await logActivity(
        req.user.id,
        "Property Upgradetion",
        `Upgradeted property with id ${id}`
    );

    res.status(200).send({
      message: "Hirdetés kiemelve",
      user,
      property,
    });
  } else {
    res.status(400).send({ message: "Nincs elegendő kredit" });
  }
});

router.get("/bid-place", auth, async (req, res) => {
  if (!req.query.id) {
    res.status(400).send({ message: "Missing Id" });
  }
  const property = await prisma.property.findMany({
    where: {
      id: req.query.id,
      isArchived: false,
      bidExpirationTime: { not: null },
      submittedBy: req.user?.id,
    },
  });

  if (property) {
    const { district } = property;
    const promotedAds = await prisma.property.findMany({
      where: {
        district,
        bidExpirationTime: { gt: new Date() },
        isArchived: false,
      },
    });
    const total = promotedAds.length;
    let position = 1;
    let top = 0;
    let bottom = 0;
    if (total > 0) {
      promotedAds.forEach((p) => {
        if (p.credit > property.credit) {
          position++;
        }
      });
      top = position - 1;
      bottom = total - position;
    }
  } else {
    return null;
  }
});

router.post("/archive/reactive/", auth, async (req, res) => {
  try {
    const requestData = {
      propertyId: req.body.propertyId
    };

    if (!requestData.propertyId) {
      return res.status(400).json({ message: "The 'propertyId' field is required." });
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.property.update({
        where: { id:requestData.propertyId },
        data: {
          isArchived: false
        },
      });

      await deleteReasonEntityById(requestData.propertyId, req.user.id);
    });

    await logActivity(
        req.user.id,
        "Property Reactivation",
        `Reactived property with id ${requestData.propertyId} by ${req.user.id}`
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error reactive property:", error);
    return res.status(500).json({ message: "Error reactive property" });
  }
});

router.get("/archive-list", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const properties = await prisma.Property.findMany({
      where: {
        isArchived: true,
        submittedBy: userId,
      }
    });
    return res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching archived properties:", error);
    return res.status(500).json({ message: "Error fetching archived properties" });
  }
});

router.post("/archive/reactive/", auth, async (req, res) => {
  try {
    const requestData = {
      propertyId: req.body.propertyId
    };

    if (!requestData.propertyId) {
      return res.status(400).json({ message: "The 'propertyId' field is required." });
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.property.update({
        where: { id:requestData.propertyId },
        data: {
          isArchived: false
        },
      });

      await deleteReasonEntityById(requestData.propertyId, req.user.id);
    });

    await logActivity(
        req.user.id,
        "Property Reactivation",
        `Reactived property with id ${requestData.propertyId}`
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error reactive property:", error);
    return res.status(500).json({ message: "Error reactive property" });
  }
});

router.delete("/archive", auth, async (req, res) => {
  try {
    const requestData = {
      propertyId: req.body.propertyId,
      reasonId: req.body.reasonId
    };

    if (!requestData.propertyId || !requestData.reasonId) {
      return res.status(400).json({ message: "Both 'id' and 'reason_id' are required." });
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.property.update({
        where: { id:requestData.propertyId },
        data: {
          isArchived: true,
        },
      });

      await createReasonEntity(requestData.reasonId, req.user.id,requestData.propertyId);
    });

    await logActivity(
        req.user.id,
        "Property Archivation",
        `Archived property with id ${requestData.propertyId}`
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error archiving property:", error);
    return res.status(500).json({ message: "Error archiving property" });
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    const { propertyId } = req.body;

    if (!propertyId) {
      return handleErrorResponse(res, 400, "'Property id is required.");
    }

    const property = await prisma.property.findFirst({
      where: { id:propertyId, submittedBy: req.user.id },
    });

    if (!property) {
      return handleErrorResponse(res, 400, "This property is not yours.");
    }

    await prisma.$transaction(async (prisma) => {
      await deleteReasonEntityById(propertyId,req.user.id);

      await prisma.property.delete({
        where: { id:propertyId },
      });
    });

    await logActivity(
        req.user.id,
        "Property Deletion",
        `Deleted property with id ${propertyId}`
    );

    return res.status(200).json({ success: true  });
  } catch (error) {
    console.log(error);
    return handleErrorResponse(res, 500, "Error deleting property");
  }
});


const deleteReasonEntityById = async (propertyId,userId) => {
  if (!propertyId) {
    throw new Error("'id' is required.");
  }

  try {
    await prisma.PropertyDeleteReasonEntity.deleteMany({
      where: { property_id:propertyId, user_id:userId }
    });

  } catch (error) {
    console.error("Error deleting reason entity:", error);
    throw new Error("Error deleting reason entity");
  }
};


const createReasonEntity = async (reasonId, userId , propertyId , comment = null) => {
  if (!reasonId || !userId || !propertyId) {
    throw new Error("Both 'reasonId' and 'userId' and 'propertyId' are required.");
  }
  if (reasonId === 3 && comment !== null) {
    throw new Error("For reasonId 3, 'comment' must be null.");
  }

  try {
    const id = await getValidReasonEntityId();
    return await prisma.propertyDeleteReasonEntity.create({
      data: {
        id,
        reason_id: reasonId,
        property_id: propertyId,
        user_id: userId,
      },
    });
  } catch (error) {
    console.error("Error creating reason entity:", error);
    throw new Error("Error creating reason entity");
  } finally {
    await logActivity(
        userId,
        "Property Updatation",
        `Updated  property with id ${propertyId} and reason id ${reasonId}`
    );
  }
};

const handleErrorResponse = (res, status, message) => {
  console.error(message);
  return res.status(status).json({ message });
};


/**
 * Note: This route must be the last in the sorting order to avoid conflicts with other routes.
 *
 * @param {string} id - The unique identifier of the property.
 *
 * @returns {Object} - The JSON response containing the property information.
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.property.findUnique({
    where: { id, isArchived: false },
  });

  if (data) {
    data.agent = await prisma.user.findFirst({
      select: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        member: {
          select: {
            agency: true
          }
        }
      },
      where: { id: data?.submittedBy },
    });
  }

  try {
    await prisma.property.update({
      where: { id },
      data: {
        views: (data?.views || 0) + 1,
      },
    });
  }catch(err){}
  return res.send({
    data,
  });
});

module.exports = router;

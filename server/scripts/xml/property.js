const logFile = require("../utils/logFile");
const xml2js = require("xml2js");
const { generate8DigitNumericId } = require("../../utils/getId");
const prisma = require("../../prisma/prisma");
const {
  adType,
  btype,
  heatingOptions,
  propertyConditions,
  floorOptions,
  liftOptions,
  komfortOptions,
  parktype,
  orientation,
  propertyType,
} = require("./mappings");
const parser = new xml2js.Parser();

exports.getValidId = async (retryCount = 0) => {
  try {
    const id = generate8DigitNumericId() + "";
    console.log(id);
    const property = await prisma.property.findFirst({
      where: { id, isArchived: false },
      select: { id: true },
    });
    if (property) {
      if (retryCount >= 10) {
        // Set a limit on the number of retries
        throw new Error(
          "Failed to generate a unique ID after multiple attempts"
        );
      }
      return getValidId(retryCount + 1); // Increment the retry count
    }
    return id;
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to handle it in the calling function
  }
};

async function loadXmlFromUrl(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to load XML. Status: ${response.status}`);
    }

    const xmlString = await response.text();
    return xmlString;
  } catch (error) {
    console.error(`Error loading XML from ${url}: ${error.message}`);
    throw error;
  }
}

exports.getProperties = async (agent, systemAgents) => {
  logFile("property-log.txt", `Loading XML for agent: ${agent.email}`);
  const currentSystemAgent = systemAgents.find((a) => a.email === agent.email);
  const xml = await loadXmlFromUrl(agent.xml);
  const json = await parser.parseStringPromise(xml);
  logFile("property-log.txt", `Loaded XML for agent: ${agent.email}`);

  const properties = json.items.item
    .filter((p) => {
      if (p.currency[0] !== "HUF") {
        logFile(
          "skipped-properties-log.txt",
          `Skipped property due to currency for agent ${agent.email}`
        );
        return false;
      }
      return true;
    })
    .map((p) => {
      function decimalToRoman(num) {
        if (typeof num !== "number" || num <= 0 || num % 1 !== 0) {
          return "Invalid input. Please enter a positive integer.";
        }

        const romanNumerals = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1,
        };

        let result = "";

        for (let key in romanNumerals) {
          while (num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
          }
        }

        return result + ". ";
      }

      let settlement = p.city[0];
      let district;
      if (settlement.indexOf("Budapest") === 0) {
        settlement = "Budapest";
        const [s, d, ...o] = p.city?.[0]?.split(" ");
        district = decimalToRoman(parseInt(d[0])) + "kerület";
      }

      return {
        builtYear: p.byear?.[0],
        price: parseInt(p.price?.[0]),
        area: parseInt(p.sqrm?.[0]),
        floor: p.floor?.[0],
        description: p.note?.[0],
        submittedBy: currentSystemAgent?.id,
        photos:
          p.images && p.images.length > 0
            ? p.images[0].image.map((i) => i.$.url)
            : [],
        referenceLink: p.prop_id[0],
        settlement: settlement || p.city[0],
        district,
        adType: adType[p.mbtyp[0]],
        street: p.street?.[0],
        rooms: p.room ? parseInt(p.room[0]) : undefined,
        heating: heatingOptions[p.htyp?.[0]],
        property_condition: propertyConditions[p["property-condition"]],
        floor: floorOptions[p.floor?.[0]],
        lift: liftOptions[p.lift?.[0]],
        komfort: komfortOptions[p.komfort?.[0]],
        parktype: parktype[p.parktype?.[0]],
        orientation: orientation[p.orient?.[0]],
        propertyType: propertyType[p.type?.[0]],
        btype: btype[p.btyp?.[0]],
      };
    });

  logFile(
    "property-log.txt",
    `Processed ${properties.length} properties for agent: ${agent.email}`
  );

  const propertyReferenceLinks = properties.map((p) => p.referenceLink);

  return { properties, propertyReferenceLinks };
};

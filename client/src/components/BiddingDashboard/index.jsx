import React, { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import moment from "moment";
import Input from "../Elements/Input";
import toast from "react-hot-toast";
import Switch from "../Elements/Switch";
import homeIcon from "../../pictures/home.svg";
import { BuyCreditModal } from "./BuyCredit";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const ordinals = ["st", "nd", "rd", "th"];

export function BiddingPropertyCard({ property, properties, setProperties }) {
  const context = useAuthUser().userData;
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [credit, setCredit] = useState();
  const [bidding, setBidding] = useState(false);
  const [isSearchBid, setIsSearchBid] = useState(true);

  const {
    position,
    page,
    currentPosition,
    isCurrentHighest,
    max,
    currentCredit,
  } = useMemo(() => {
    const isPromotionActive =
      property.bidExpirationTime &&
      new Date(property.bidExpirationTime).getTime() > Date.now();
    const currentCredit = isPromotionActive ? property.credit || 0 : 0;
    const creditInt = parseInt(credit + currentCredit);
    let position = 1;
    data?.forEach((item) => {
      if (parseInt(item.price) >= creditInt) {
        position++;
      }
    });
    return {
      position,
      page: Math.ceil(position / 4),
      max: Math.max(...(data?.map((item) => item.price) || [])),
      highestId: data?.[0]?.id,
      isCurrentHighest: property?.id === data?.[0]?.id,
      currentCredit,
    };
  }, [property, credit, data]);

  useEffect(() => {
    setLoading(true);
    const link = isSearchBid
      ? "/api/property/bid-prices?district=" + property.district
      : "/api/property/homepage-bid-prices";
    request(link)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [property?.id, isSearchBid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bidLink = isSearchBid
        ? `/api/property/upgrade/${property.id}`
        : `/api/property/upgrade-home/${property.id}`;
      const getBidsLink = isSearchBid
        ? "/api/property/bid-prices?district=" + property.district
        : "/api/property/homepage-bid-prices";

      setBidding(true);
      if (parseInt(credit) <= 0) {
        return toast.error("Az érték nagyobb kell legyen, mint 0");
      }
      const response = await request(bidLink, {
        method: "POST",
        body: JSON.stringify({
          bidCredits: parseInt(credit),
        }),
      });
      const { property: updatedProperty, user } = response;
      if (updatedProperty) {
        e.target.reset();
        for (let x in updatedProperty) {
          property[x] = updatedProperty[x];
        }
        context.setData({ ...context.data, user });
        setProperties([...properties]);

        request(getBidsLink)
          .then((data) => {
            setData(data.data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      }
    } catch (err) {
    } finally {
      setBidding(false);
    }
  };

  return (
    <div className="bg-white p-8">
      <div className="mb-2">
        <p className="">
          <span className="text-lg font-semibold">Kiemelés</span>
          <span className="float-right flex gap-2">
            <span className="text-md">
              Kiemelés {isSearchBid ? "a keresési találatokban" : "a főoldalon"}
            </span>
            <span>
              <Switch
                onChange={(e) => {
                  setIsSearchBid(e);
                }}
                defaultValue={true}
              />
            </span>
          </span>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Input
              onChange={(e) => {
                console.log(e.target.value);
                setCredit(e.target.value);
              }}
              placeholder="Kredit mennyiség"
              type="number"
            />
          </div>
          <div className="">
            <button className="blue-button my-4 md:my-0">
              {bidding ? <Loading /> : "Kiemelés"}
            </button>
          </div>
        </div>
      </form>
      {loading ? (
        <div className="flex h-24 justify-center items-center">
          <Loading />
        </div>
      ) : isSearchBid ? (
        <>
          <div className="my-2">
            <p className="font-bold">Kiemelésed pozíciója</p>
            {data?.map((item, index) => {
              const isCurrentHighest = item.id === property.id;
              return (
                <div className="flex gap-2">
                  <p>{index + 1}. pozíció költött:</p>
                  <p className="font-bold">{item.price} kredit</p>
                  {isCurrentHighest && (
                    <p className="font-bold">(Jelenlegi hirdetés)</p>
                  )}
                </div>
              );
            })}
          </div>
          {credit ? (
            <div className="my-2">
              Ha {credit} kredittel licitálsz, a hirdetésed a(z) {page}. oldalon
              lesz, {position % 4}. pozícióban
            </div>
          ) : isCurrentHighest ? null : (
            <div className="my-2">
              Az 1. oldalon és az 1. pozícióban való megjelenéshez költs többet,
              mint {max} kreditet
            </div>
          )}
        </>
      ) : (
        <>
          <div className="my-2">
            <p className="font-bold">Kiemelésed pozíciója</p>
            {data?.map((item, index) => {
              const isCurrentHighest = item.id === property.id;
              return (
                <div className="flex gap-2">
                  <p>{index + 1}. pozícióban költött:</p>
                  <p className="font-bold">{item.price} kredit</p>
                  {isCurrentHighest && (
                    <p className="font-bold">(Jelenlegi hirdetés)</p>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function BiddingDashboard() {
  const user = useAuthUser()?.userData;
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetailsId, setShowDetailsId] = useState();
  const [showBuyCredit, setShowBuyCredit] = useState(false);

  useEffect(() => {
    request("/api/user/my-properties")
      .then((data) => {
        setLoading(false);
        setProperties(data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="w-full h-96 flex justify-center items-center">
          <Loading />
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout selected={2}>
        <div className="p-8">
          <p className="text-xl font-semibold">
            Kiemelés
            <span
              className="float-right !text-lg font-bold text-gray-600"
              onClick={() => setShowBuyCredit(true)}
            >
              <span className="text-blue-600 cursor-pointer">
                Kredit vásárlása |{" "}
              </span>
              {user?.credit} kredit
            </span>
          </p>
          <div className="my-8">
            {properties.map((property) => {
              return (
                <div
                  className={`w-full mt-2 bg-white rounded-lg shadow-lg my-4 overflow-hidden`}
                >
                  <div className="md:grid grid-cols-4 md:h-64 overflow-hidden">
                    <div className="overflow-hidden h-64 md:h-full">
                      <img
                        src={property.photos[0]}
                        className="min-h-full min-w-full"
                      />
                    </div>
                    <div className="col-span-3 p-4">
                      <p className="font-semibold text-lg">
                        {property.street} {property?.houseNo}
                      </p>
                      <p className="my-2">
                        {property.settlement} {property.district}
                      </p>
                      <p className="my-2 font-bold text-gray-600">
                        {property.price % 1e4 === 0
                          ? `${(property.price / 1e6)
                              .toLocaleString("hu-HU")
                              .replace(".", ",")} M Ft`
                          : `${(Math.floor(property.price / 1e4) / 100)
                              .toLocaleString("hu-HU", {
                                minimumFractionDigits: 1,
                                maximumFractionDigits: 2,
                              })
                              .replace(".", ",")} M Ft`}
                      </p>
                      <p className="my-1">
                        {property.bidExpirationTime ? (
                          new Date(property.bidExpirationTime).getTime() >
                          Date.now() ? (
                            <p>
                              Kiemelésed lejárata:{" "}
                              {moment(
                                new Date(property.bidExpirationTime)
                              ).format("YYYY-MM-DD hh:mm")}{" "}
                              <b>(aktív)</b>
                              <br />
                              Elköltöttél {property.credit} kreditet
                            </p>
                          ) : (
                            <p>
                              Kiemelésed lejárt:{" "}
                              {moment(
                                new Date(property.bidExpirationTime)
                              ).format("YYYY-MM-DD hh:mm")}
                              <br />
                              Elköltöttél {property.credit} kreditet
                            </p>
                          )
                        ) : null}
                      </p>

                      <p className="my-1">
                        {property.h_bidExpirationTime ? (
                          new Date(property.h_bidExpirationTime).getTime() >
                          Date.now() ? (
                            <p>
                              <span className="flex gap-2">
                                <img
                                  src={homeIcon}
                                  className="w-4 h-4 mt-0.5"
                                />
                                <span className="align-top m-0">
                                  Kiemelésed lejárata:{" "}
                                  {moment(
                                    new Date(property.h_bidExpirationTime)
                                  ).format("YYYY-MM-DD hh:mm")}{" "}
                                  <b>(aktív)</b>
                                </span>
                              </span>
                              Elköltöttél {property.h_credit} kreditet
                            </p>
                          ) : (
                            <p>
                              <span className="flex gap-2">
                                <img
                                  src={homeIcon}
                                  className="w-4 h-4 mt-0.5"
                                />
                                <p>Főoldali</p>
                                <span className="align-top m-0">
                                  Kiemelésed lejárt:{" "}
                                  {moment(
                                    new Date(property.h_bidExpirationTime)
                                  ).format("YYYY-MM-DD hh:mm")}
                                </span>
                              </span>
                              Elköltöttél {property.h_credit} kreditet
                            </p>
                          )
                        ) : null}
                      </p>

                      <p className="my-1">
                        <span
                          onClick={() => {
                            setShowDetailsId(
                              property.id === showDetailsId
                                ? undefined
                                : property.id
                            );
                          }}
                          className="text-blue-600 cursor-pointer"
                        >
                          Kiemelés{" "}
                          {property.id === showDetailsId
                            ? "elrejtése"
                            : "kezelése"}
                        </span>
                      </p>
                    </div>
                  </div>
                  {showDetailsId === property.id && (
                    <BiddingPropertyCard
                      property={property}
                      properties={properties}
                      setProperties={setProperties}
                      key={property.credit}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
      {showBuyCredit && (
        <BuyCreditModal close={() => setShowBuyCredit(false)} />
      )}
    </>
  );
}

export default BiddingDashboard;

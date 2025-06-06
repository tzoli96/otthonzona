import React, { useState } from "react";
import { districtOptions, settlementOptions } from "../../res/options";
import thousandSeparator from "../../utils/thousandSeparator";
import moment from "moment";
import viewsIcon from "../../pictures/app/view.svg";
import timeIcon from "../../pictures/app/time.svg";
import { Link } from "react-router-dom";
import { BiddingPropertyCard } from "../BiddingDashboard";
import trashIcon from "../../pictures/app/trash.svg";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import useIsMobile from "../../utils/useIsMobile";
import manageAdsIcon from "../../pictures/app/manage-ads.png";
import eyeIcon from "../../pictures/app/eye.svg";
import bankIcon from "../../pictures/app/bank.svg";

function MyPropertyCard({
  property,
  properties,
  setProperties,
  setDapIsVisible,
  setDeletingProperty,
}) {
  const [showBidding, setShowBidding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const isMobile = useIsMobile();

  const district = districtOptions.find(
    (option) => option.value === property.district
  );
  const settlement = settlementOptions.find(
    (option) => option.value === property.settlement
  );

  const showDeletePopup = (property) => {
    setDeletingProperty(property);
    setDapIsVisible(true);
  };

  const handleDelete = async () => {
    try {
      if (window.confirm("Biztos, hogy törölni akarod ezt a ingatlant?")) {
        setDeleting(true);
        const response = await request(`/api/property/${property.id}`, {
          method: "DELETE",
        });
        if (response?.data?.isArchived) {
          setProperties(properties.filter((p) => p.id !== property.id));
        }
      }
    } catch (err) {
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-2xl shadow-lg md:grid grid-cols-3 bg-white my-4 overflow-hidden w-full">
      <a href={`/${property?.id}`} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden max-h-[400px]">
          <img src={property.photos[0]} className="min-h-full min-w-full" />
        </div>
      </a>
      <div className="p-4 md:p-8 md:px-16 col-span-2">
        <p
          className="font-bold grid"
          style={{ gridTemplateColumns: "calc(100% - 20px) 20px" }}
        >
          <a
            href={`/${property?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {property.street} {property?.houseNo}
            </span>
          </a>
          <span onClick={() => showDeletePopup(property)}>
            {deleting ? (
              <Loading />
            ) : (
              <img
                src={trashIcon}
                className="float-right cursor-pointer h-6 w-6"
              />
            )}
          </span>
        </p>
        <p className="font-bold text-gray-400">
          {settlement?.label} {district?.label}
        </p>
        <p className="my-6 text-orange text-2xl font-bold">
          {thousandSeparator(property.price.toFixed(0) + "", " ")} Ft
        </p>
        <div className="font-bold">
          <p className="text-blue my-1 flex gap-3">
            <img src={viewsIcon} className="h-4 w-4 mt-1" />
            Megtekintve:{" "}
            <span className="text-gray-400 ml-1">{property.views || 0}</span>
          </p>
          <p className="text-blue my-1 flex gap-3">
            <img src={timeIcon} className="h-4 w-4 mt-1" /> Feladva:
            <span className="text-gray-400 ml-1">
              {moment(property.submittedOn).format("YYYY-MM-DD")}
            </span>
          </p>
          <p className="my-1">
            {property.bidExpirationTime ? (
              new Date(property.bidExpirationTime).getTime() > Date.now() ? (
                <p>
                  Kiemelésed lejárata:{" "}
                  <span className="text-blue">
                    {moment(new Date(property.bidExpirationTime)).format(
                      "YYYY-MM-DD HH:MM"
                    )}{" "}
                  </span>
                  <b>(aktív)</b>
                  <br />
                  Elköltöttél {property.credit} kreditet
                </p>
              ) : (
                <p>
                  Kiemelésed lejárt:{" "}
                  <span className="text-blue">
                    {moment(new Date(property.bidExpirationTime)).format(
                      "YYYY-MM-DD HH:MM"
                    )}
                  </span>
                  <br />
                  Elköltöttél {property.credit} kreditet
                </p>
              )
            ) : null}
          </p>
        </div>
        <div className="flex gap-5">
          <div className="my-4 w-auto">
            <Link to={`/edit-property/${property?.id}`}>
              <button
                className="orange-button flex items-center justify-center md:max-xl:!w-[75px] md:max-xl:p-3"
                title="Szerkesztés"
              >
                <img
                  src={manageAdsIcon}
                  className="w-[24px] h-[24px] mr-2 md:max-xl:mr-0"
                />

                <span className="md:max-xl:hidden">Szerkesztés</span>
              </button>
            </Link>
          </div>

          {!isMobile && (
            <div className="my-4">
              <a
                href={`/${property?.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="blue-button flex items-center justify-center md:max-xl:!w-[75px]"
                  title="Megtekintés"
                >
                  <img
                    src={eyeIcon}
                    className="w-[24px] h-[24px] mr-2 md:max-xl:mr-0"
                  />

                  <span className="md:max-xl:hidden">Megtekintés</span>
                </button>
              </a>
            </div>
          )}

          <div className="my-4 w-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBidding(!showBidding);
              }}
              className="orange-button flex items-center justify-center md:max-xl:!w-[75px]"
              title="Kiemelés"
            >
              <img
                src={bankIcon}
                className="w-[24px] h-[24px] mr-2 md:max-xl:mr-0"
              />

              <span className="md:max-xl:hidden">Kiemelés</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        {showBidding && (
          <BiddingPropertyCard
            property={property}
            properties={properties}
            setProperties={setProperties}
          />
        )}
      </div>
    </div>
  );
}

export default MyPropertyCard;

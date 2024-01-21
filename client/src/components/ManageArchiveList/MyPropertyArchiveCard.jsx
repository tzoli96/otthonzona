import React, { useState } from "react";
import { districtOptions, settlementOptions } from "../../res/options";
import thousandSeparator from "../../utils/thousandSeparator";
import moment from "moment";
import viewsIcon from "../../pictures/app/view.svg";
import timeIcon from "../../pictures/app/time.svg";
import { Link } from "react-router-dom";
import trashIcon from "../../pictures/app/trash.svg";
import Loading from "../Elements/Loading";
import useIsMobile from "../../utils/useIsMobile";

function MyPropertyArchiveCard({ property, properties, setProperties, setDapIsVisible, setDeletingProperty }) {
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

  return (
    <div className="rounded-2xl shadow-lg md:grid grid-cols-3 bg-white my-4 overflow-hidden w-full">
      <Link to={`/${property?.id}`}>
        <div className="overflow-hidden max-h-[400px]">
          <img src={property.photos[0]} className="min-h-full min-w-full" />
        </div>
      </Link>
      <div className="p-4 md:p-8 md:px-16 col-span-2">
        <p
          className="font-bold grid"
          style={{ gridTemplateColumns: "calc(100% - 20px) 20px" }}
        >
          <Link to={`/${property?.id}`}>
            <span>
              {property.street} {property?.houseNo}
            </span>
          </Link>
          <span onClick={() => showDeletePopup(property)}>
          {/*<span onClick={handleDelete}>*/}
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
        </div>
        <div className="grid grid-cols-2 md:flex gap-2">
          {!isMobile && (
            <div className="my-4">
              <Link to={`/${property?.id}`}>
                <button className="blue-button">Aktiválás</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPropertyArchiveCard;

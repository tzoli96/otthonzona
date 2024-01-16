import React from "react";
import pinIcon from "../../icons/pin.svg";
import roomIcon from "../../icons/room.svg";
import arrows from "../../icons/two-head-arrow.svg";
import placeHolder from "../../pictures/property_placeholder.png";
import { Link } from "react-router-dom";
import {
  districtOptions,
  settlementOptions,
  adType,
  propertyType,
} from "../../res/options";

function PropertyCard({ property }) {
  const district = districtOptions.find(
    (option) => option.value === property.district
  );
  const settlement = settlementOptions.find(
    (option) => option.value === property.settlement
  );
  const adTypeCucc = adType.find((option) => option.value === property.adType);
  const propertyCucc = propertyType.find(
    (option) => option.value === property.propertyType
  );

  return (
    <Link to={`/${property.id}`}>
      <div className="bg-white rounded-2xl mt-4 md:mt-0 card-shadow relative overflow-hidden">
        <div className="overflow-hidden round-2xl relative">
          {property.isPromoted && (
            <div className="absolute orange-button flex justify-center items-center right-2 top-2 p-2 !h-8 !w-28 shadow-lg">
              KIEMELT
            </div>
          )}
          <div className="absolute z-40 white-button flex justify-center items-center left-2 bottom-2 p-2 !h-8 !w-28 shadow-lg">
            {property.price % 1e4 === 0 && property.price >= 1e6
              ? `${(property.price / 1e6)
                  .toLocaleString("hu-HU")
                  .replace(".", ",")} M Ft`
              : property.price < 1e6
              ? `${property.price.toLocaleString("hu-HU").replace(".", ",")} Ft`
              : `${(Math.floor(property.price / 1e4) / 100)
                  .toLocaleString("hu-HU", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2,
                  })
                  .replace(".", ",")} M Ft`}
          </div>
          <div
            className="w-full h-72"
            style={{
              background: `url(${property.photos[0] || placeHolder})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="mt-2 p-4">
          <p className="card-heading">
            {property.street || settlement?.label}{" "}
            {property?.exactPosition &&
              property?.houseNo &&
              ` ${property.houseNo}`}
          </p>
          <p className="font-bold text-gray-400">
            {settlement?.label} {district?.label}
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 p-4 font-bold"
          style={{ gridTemplateColumns: "calc(100% - 100px) 100px" }}
        >
          <div>
            <div>
              <p className="flex gap-2">
                <img src={pinIcon} />
                <span className="text-lightgrey text-sm">
                  {adTypeCucc?.label} {propertyCucc?.label}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex gap-2">
                <img src={roomIcon} />
                <span className="text-lightgrey text-sm">
                  {property.rooms} szoba
                </span>
              </div>
              <div className="flex gap-2">
                <img src={arrows} />
                <span className="text-lightgrey text-sm">
                  {property.area}m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="orange-button float-right">Részletek</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;

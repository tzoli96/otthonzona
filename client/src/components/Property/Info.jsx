import React, { useContext, useState } from "react";
import roomIcon from "../../icons/room.svg";
import arrows from "../../icons/two-head-arrow.svg";
import heart from "../../icons/heart.svg";
import orangeHeart from "../../icons/orange-heart.svg";
import share from "../../icons/share.svg";
import { districtOptions, settlementOptions } from "../../res/options";
import thousandSeparator from "../../utils/thousandSeparator";
import { request } from "../../utils/request";
import { AppContext } from "../../App";
import {
  adType,
  btype,
  propertyType,
  // ... any other option imports you need
} from "../../res/options";

function Info({ property }) {
  const { user } = useContext(AppContext);

  const [isSaved, setIsSaved] = useState(
    user?.savedProperties?.map((p) => p + "").indexOf(property.id) > -1
  );

  const district = districtOptions.find(
    (option) => option.value === property.district
  );
  const settlement = settlementOptions.find(
    (option) => option.value === property.settlement
  );

  const isLoggedIn = true; // Replace with actual logic to check login status

  const handleAddToFavorites = async () => {
    if (!isLoggedIn) {
      alert("Please log in to add properties to your favorites.");
      return;
    }

    try {
      await request(`/api/user/save-property/${property.id}`, {
        method: "POST",
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Failed to add to favorites", error);
      alert("Failed to add to favorites");
    }
  };

  const getLabel = (value, optionsArray) => {
    const option = optionsArray.find((option) => option.value === value);
    return option ? option.label : value;
  };

  return (
    <div className="rounded-2xl bg-white py-8 px-6 card-shadow">
      <p className="card-heading">
        {settlement?.label} {district?.label} {property.street}{" "}
        {property?.exactPosition && property?.houseNo && ` ${property.houseNo}`}
      </p>
      <p className="text-orange my-2 font-bold">
        {getLabel(property?.adType, adType)} {getLabel(property?.btype, btype)}
        {(property?.propertyType === "lakas" ||
          property?.propertyType === "telek") &&
          ` ${getLabel(property?.propertyType, propertyType)}`}
      </p>
      <div className="mt-6">
        <div className="border-b pb-1">
          <span className="inline-flex gap-3">
            <img src={roomIcon} />
            <span className="text-lightgrey text-md font-bold">Szoba</span>
          </span>
          <span className="float-right font-bold">
            {property.rooms}{" "}
            {property.halfRooms && ` + ${property.halfRooms} fél`}
          </span>
        </div>

        <div className="border-b mt-3 pb-1">
          <span className="inline-flex gap-3">
            <img src={arrows} />
            <span className="text-lightgrey text-md font-bold">
              Alapterület
            </span>
          </span>
          <span className="float-right font-bold">
            {property.area}m<sup>2</sup>
          </span>
        </div>
        {property?.landArea && (
          <div className="border-b mt-3 pb-1">
            <span className="inline-flex gap-3">
              <img src={arrows} />
              <span className="text-lightgrey text-md font-bold">
                Telekterület
              </span>
            </span>
            <span className="float-right font-bold">
              {property.landArea}m<sup>2</sup>
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 text-2xl text-blue font-bold">
        {thousandSeparator(property.price)} Ft
      </div>
      <div className="my-6">
        <button className="orange-button w-full" style={{ width: "100%" }}>
          Érdekel az ingatlan
        </button>
      </div>
      <div className="mt-2 grid grid-cols-2 text-lightgrey font-bold text-md">
        <div>
          <button className="inline-flex gap-2" onClick={handleAddToFavorites}>
            <img src={isSaved ? orangeHeart : heart} alt="Add to favorites" />
            <span>{isSaved ? "Mentve" : "Ingatlan mentése"}</span>
          </button>
        </div>
        <div>
          <span className="inline-flex gap-2 float-right">
            <img src={share} />
            <span className="mt-1">Megosztás</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;

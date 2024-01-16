import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import thousandSeparator from "../../utils/thousandSeparator";
import viewsIcon from "../../pictures/app/view.svg";
import timeIcon from "../../pictures/app/time.svg";
import { BiddingPropertyCard } from "../BiddingDashboard";
import trashIcon from "../../pictures/app/trash.svg";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import useIsMobile from "../../utils/useIsMobile";

function PropertyCard({ property }) {
  const [deleting, setDeleting] = useState(false);
  const isMobile = useIsMobile();

  const handleRemoveFromSaved = async () => {
    if (
      window.confirm(
        "Biztos eltávolítod a mentett hirdetések közül ezt a hirdetést?"
      )
    ) {
      setDeleting(true);
      try {
        const response = await request(
          `/api/user/remove-saved-property/${property.id}`,
          {
            method: "POST",
          }
        );
        if (response.status === 200) {
          // Property removed successfully, you can update the UI here if needed.
        }
      } catch (err) {
        console.error("Error removing property from favorites:", err);
      } finally {
        setDeleting(false);
      }
    }
  };

  return (
    <div className="rounded-2xl shadow-lg md:grid grid-cols-3 bg-white my-4 overflow-hidden w-full">
      <Link to={`/${property.id}`}>
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
              {" "}
              {property.street} {property?.houseNo}
            </span>
          </Link>
          <span onClick={handleRemoveFromSaved}>
            {deleting ? (
              <Loading />
            ) : (
              <img
                src={trashIcon}
                alt="Remove from favorites"
                className="float-right cursor-pointer"
              />
            )}
          </span>
        </p>
        <p className="font-bold text-gray-400">
          {property.district} {property.settlement}
        </p>
        <p className="my-6 text-orange text-2xl font-bold">
          {thousandSeparator(property.price.toFixed(0) + "", " ")} Ft
        </p>

        <div className="grid grid-cols-2 md:flex gap-2">
          {!isMobile && (
            <div className="my-4">
              <Link to={`/${property.id}`}>
                <button className="blue-button">Megtekintés</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

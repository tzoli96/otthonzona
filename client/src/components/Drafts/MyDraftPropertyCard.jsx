import React, { useState } from "react";
import { districtOptions, settlementOptions } from "../../res/options";
import thousandSeparator from "../../utils/thousandSeparator";
import { Link } from "react-router-dom";
import { BiddingPropertyCard } from "../BiddingDashboard";
import trashIcon from "../../pictures/app/trash.svg";
import Loading from "../Elements/Loading";
import useIsMobile from "../../utils/useIsMobile";
import { deleteDraftProperty } from "../../utils/request/draftsRequest";

function MyDraftPropertyCard({ property, properties, setProperties }) {
  const [showBidding, setShowBidding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const isMobile = useIsMobile();

  const district = districtOptions.find(
    (option) => option.value === property.district
  );
  const settlement = settlementOptions.find(
    (option) => option.value === property.settlement
  );

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this draft?")) {
        setDeleting(true);
        const response = await deleteDraftProperty(property.id);
        if (response.success) {
          setProperties(properties.filter((p) => p.id !== property.id));
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-2xl shadow-lg md:grid grid-cols-3 bg-white my-4 overflow-hidden">
      <Link to={`/edit-draft/${property?.id}`}>
        <div className="overflow-hidden max-h-[400px]">
          <img src={property.photos[0]} className="min-h-full min-w-full" />
        </div>
      </Link>
      <div className="p-4 md:p-8 md:px-16 col-span-2">
        <p
          className="font-bold grid"
          style={{ gridTemplateColumns: "calc(100% - 20px) 20px" }}
        >
          <Link to={`/edit-draft/${property?.id}`}>
            <span>
              {property.street} {property?.houseNo}
            </span>
          </Link>
          <span onClick={handleDelete}>
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
        {property.price && (
            <p className="my-6 text-orange text-2xl font-bold">
              {thousandSeparator(property.price.toFixed(0) + "", " ")} Ft
            </p>
        )}
        <div className="grid grid-cols-2 md:flex gap-2">
          <div className="my-4 w-full md:w-auto">
            <Link to={`/edit-draft/${property?.id}`}>
              <button className="orange-button">Folytatás</button>
            </Link>
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

export default MyDraftPropertyCard;

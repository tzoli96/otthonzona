import React, { useEffect, useState } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import PropertyCard from "./PropertyCard";
import toast from "react-hot-toast";

function SavedProperties() {
  const [propertyIds, setPropertyIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("/api/user/saved-properties")
      .then((data) => {
        //console.log("API response data:", data);
        if (data && Array.isArray(data.data)) {
          setPropertyIds(data.data);
        } else {
          toast.error("Hibás válaszformátum:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        toast.error(
          "Hiba a mentett ingatlanok azonosítóinak lekérdezése során",
          err
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout selected={3}>
        <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
          <Loading />
          <span>A mentett hirdetések betöltése folyamatban van</span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout selected={3}>
      <div className="p-4 md:p-8">
        <p className="card-heading">Mentett hirdetések</p>
        <div>
          {propertyIds.length > 0 ? (
            propertyIds.map((propertyId) => (
              <PropertyCard key={propertyId} property={propertyId} />
            ))
          ) : (
            <p>Nincsenek mentett hirdetések</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SavedProperties;

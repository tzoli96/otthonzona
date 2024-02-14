import React, { useEffect, useState, useContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import MyDraftPropertyCard from "./MyDraftPropertyCard";

function Drafts({}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("/api/user/my-drafts")
        .then((data) => {
          setLoading(false);
          setProperties(data.data);
        })
        .catch((err) => {
          setLoading(false);
        });
  }, []);

  return (
      <>
        <Layout selected={5}>
          <div className="p-4 md:p-8">
            <p className="text-xl font-semibold">
              Piszkozatok
            </p>
            {loading ? (
                <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
                  <Loading />
                  <span>A piszkozatok betöltése folyamatban van</span>
                </div>
            ) : (
                <div>
                  {properties.map((property) => (
                      <MyDraftPropertyCard
                          property={property}
                          properties={properties}
                          setProperties={setProperties}
                      />
                  ))}
                </div>
            )}
          </div>
        </Layout>
      </>
  );
}

export default Drafts;

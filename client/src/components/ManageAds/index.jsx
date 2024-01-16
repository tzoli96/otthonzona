import React, { useEffect, useState, useContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import MyPropertyCard from "./MyPropertyCard";
import { BuyCreditModal } from "../BiddingDashboard/BuyCredit";
import { AppContext } from "../../App";

function ManageAds({}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AppContext);
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

  return (
    <>
      <Layout selected={0}>
        <div className="p-4 md:p-8">
          <p className="text-xl font-semibold">
            Hirdetések kezelése
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
          {loading ? (
            <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
              <Loading />
              <span>A hirdetések betöltése folyamatban van</span>
            </div>
          ) : (
            <div>
              {properties.map((property) => (
                <MyPropertyCard
                  property={property}
                  properties={properties}
                  setProperties={setProperties}
                />
              ))}
            </div>
          )}
        </div>
      </Layout>
      {showBuyCredit && (
        <BuyCreditModal close={() => setShowBuyCredit(false)} />
      )}
    </>
  );
}

export default ManageAds;

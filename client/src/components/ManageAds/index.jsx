import React, { useEffect, useState, useContext, createContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import MyPropertyCard from "./MyPropertyCard";
import { BuyCreditModal } from "../BiddingDashboard/BuyCredit";
import { AppContext } from "../../App";
import { DeleteAdPopup } from "./DeleteAdPopup";
import { DeleteArchivePopup } from "./DeleteArchivePopup";

function ManageAds({ isArchive }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AppContext);
  const [showBuyCredit, setShowBuyCredit] = useState(false);

  //delete ad popup is visible
  const [dapIsVisible, setDapIsVisible] = useState(false);
  const [deletingProperty, setDeletingProperty] = useState(null);

  ManageAds.defaultProps = {
    isArchive: false,
  };

  const closeDap = () => {
    console.log("close");
  };

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
            {isArchive ? "Archívált hirdetések" : "Hirdetések kezelése"}
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
                  setDapIsVisible={setDapIsVisible}
                  setDeletingProperty={setDeletingProperty}
                />
              ))}
            </div>
          )}
        </div>
      </Layout>
      {showBuyCredit && (
        <BuyCreditModal close={() => setShowBuyCredit(false)} />
      )}
      {dapIsVisible && !isArchive && (
        <DeleteAdPopup
          setIsVisible={setDapIsVisible}
          property={deletingProperty}
          setProperties={setProperties}
        ></DeleteAdPopup>
      )}
      {dapIsVisible && isArchive && (
        <DeleteArchivePopup
          setIsVisible={setDapIsVisible}
          property={deletingProperty}
          setProperties={setProperties}
        ></DeleteArchivePopup>
      )}
    </>
  );
}

export default ManageAds;

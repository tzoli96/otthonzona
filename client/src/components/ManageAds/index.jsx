import React, { useEffect, useState, useContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import { request } from "../../utils/request";
import MyPropertyCard from "./MyPropertyCard";
import { BuyCreditModal } from "../BiddingDashboard/BuyCredit";
import { DeleteAdPopup } from "./DeleteAdPopup";
import { getDeleteReasons } from "../../utils/request/archiveRequest";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function ManageAds({}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthUser()?.userData;
  const [showBuyCredit, setShowBuyCredit] = useState(false);
  const [reasonOptions, setReasonOptions] = useState([]);
  const [dapIsVisible, setDapIsVisible] = useState(false);
  const [deletingProperty, setDeletingProperty] = useState(null);


  useEffect(() => {
    getDeleteReasons()
        .then((data) => {
          setLoading(false);
          const mappedOptions = ReasonOptionsMapping(data).concat([
            { value:"3", name: "Egyéb", openComment: true },
          ]);
          setReasonOptions(mappedOptions);
        })
        .catch((err) => {
          setLoading(false);
        });

    request("/api/user/my-properties")
        .then((data) => {
          setLoading(false);
          setProperties(data.data);
        })
        .catch((err) => {
          setLoading(false);
        });
  }, []);


  const ReasonOptionsMapping = (data) => {
    return data.data.map(item => ({
      value: item.id,
      name: item.name,
      openComment: false
    }));
  };

  return (
    <>
      <Layout selected={0}>
        <div className="p-4 md:p-8">
          <p className="text-xl font-semibold">
            Hirdetéseim
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
      {dapIsVisible && (
          <DeleteAdPopup
              setIsVisible={setDapIsVisible}
              property={deletingProperty}
              setProperties={setProperties}
              properties={properties}
              ReasonOptions={reasonOptions}
          ></DeleteAdPopup>
      )}
    </>
  );
}

export default ManageAds;

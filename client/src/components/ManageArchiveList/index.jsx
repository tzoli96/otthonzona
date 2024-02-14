import React, { useEffect, useState, useContext, createContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import MyPropertyArchiveCard from "./MyPropertyArchiveCard";
import { DeleteArchivePopup } from "./DeleteArchivePopup";
import { getArchiveListRequest } from "../../utils/request/archiveRequest";
import { ActivateArchivePopup } from "./ActivateArchivePopup";

function ManageArchiveList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  //delete ad popup is visible
  const [dapIsVisible, setDapIsVisible] = useState(false);
  const [deletingProperty, setDeletingProperty] = useState(null);

  const [activatePopup, setActivatePopup] = useState(false);
  const [activatingProperty, setActivatingProperty] = useState(null);

  const activatePopupProps = {
    visible: activatePopup,
    setVisible: setActivatePopup,
    property: activatingProperty,
    setProperty: setActivatingProperty,
    properties: properties,
    setProperties: setProperties,
  };

  useEffect(() => {
    getArchiveListRequest()
      .then((data) => {
        setLoading(false);
        setProperties(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Layout selected={8}>
        <div className="p-4 md:p-8">
          <p className="text-xl font-semibold">Archívált hirdetések</p>
          {loading ? (
            <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
              <Loading />
              <span>Archívált hirdetések betöltése folyamatban van</span>
            </div>
          ) : (
            <div>
              {properties.map((property) => (
                <MyPropertyArchiveCard
                  property={property}
                  properties={properties}
                  setProperties={setProperties}
                  setDapIsVisible={setDapIsVisible}
                  setDeletingProperty={setDeletingProperty}
                  activatePopup={activatePopupProps}
                />
              ))}
            </div>
          )}
        </div>
      </Layout>
      {dapIsVisible && (
        <DeleteArchivePopup
          setIsVisible={setDapIsVisible}
          property={deletingProperty}
          setProperties={setProperties}
          properties={properties}
        ></DeleteArchivePopup>
      )}
      {activatePopup && <ActivateArchivePopup {...activatePopupProps} />}
    </>
  );
}

export default ManageArchiveList;

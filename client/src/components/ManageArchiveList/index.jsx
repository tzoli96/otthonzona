import React, { useEffect, useState, useContext, createContext } from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import MyPropertyArchiveCard from "./MyPropertyArchiveCard";
import { AppContext } from "../../App";
import { DeleteArchivePopup } from "./DeleteArchivePopup";
import { getArchiveListRequest } from "../../utils/request/archiveRequest";

function ManageArchiveList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AppContext);
  //delete ad popup is visible
  const [dapIsVisible, setDapIsVisible] = useState(false);
  const [deletingProperty, setDeletingProperty] = useState(null);

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
      <Layout selected={7}>
        <div className="p-4 md:p-8">
          <p className="text-xl font-semibold">
              Archívált hirdetések
          </p>
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
    </>
  );
}

export default ManageArchiveList;

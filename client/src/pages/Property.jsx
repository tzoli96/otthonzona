import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Info from "../components/Property/Info";
import Agent from "../components/Property/Agent";
import Photos from "../components/Property/Photos";
import About from "../components/Property/About";
import Map from "../components/Property/Map";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../utils/request";
import useIsMobile, {useIsSmallerScreen} from "../utils/useIsMobile";
import ErrorPage from "../components/ErrorPage";
import { toast } from "react-hot-toast";

function Property() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);
  const [isValidId, setIsValidId] = useState(true);

  useEffect(() => {
    if (!/^\d+$/.test(id)) {
      setIsValidId(false);
      return;
    }

    if (id) {
      request(`/api/property/${id}`)
        .then((data) => {
          setProperty(data.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error("Hiba", err);
          setLoading(false);
        });
    }
  }, [id]);

  const isSmallerScreen = useIsSmallerScreen(1023);

  if (!isValidId) {
    return <ErrorPage />;
  }

  if (property && isSmallerScreen) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <div className="my-4">
            <Photos property={property} />
          </div>
          <div className="mt-4">
            <Info property={property}/>
          </div>
          <div className="mb-4 mt-0">
            <About property={property} />
          </div>
          <div className="my-4">
            <Agent agent={property?.agent} />
          </div>
          <div className="my-4">
            <Map
              centerLocation={`${property?.address || ""} ${
                property?.district || ""
              } ${property?.settlement || ""} ${property?.street || ""}`}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (property)
    return (
      <>
        <Navbar />
        <div className="orange-gradient relative rounded-br-3xl rounded-bl-3xl h-44 -mb-24 z-0" />
        <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto relative z-30 mb-12">
          <div>
            <Info property={property} />
            <div className="mt-4">
              <Agent agent={property?.agent} />
            </div>
          </div>
          <div className="col-span-2">
            <Photos property={property} />
            <About property={property} />
            <div className="mt-6">
              <Map
                centerLocation={`${property?.address || ""} ${
                  property?.district || ""
                } ${property?.settlement || ""} ${property?.street || ""}`}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Property;

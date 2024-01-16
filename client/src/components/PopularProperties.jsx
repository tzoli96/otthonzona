import React, { useEffect, useState } from "react";
import orangeStar from "../icons/orange-star.svg";
import p1 from "../pictures/p1.png";
import p2 from "../pictures/p2.png";
import p3 from "../pictures/p3.png";
import PropertyCard from "./Elements/PropertyCard";
import illus from "../pictures/blue-illus.svg";
import useIsMobile from "../utils/useIsMobile";
import { request } from "../utils/request";

const properties = [
  { image: p1, title: "Eladó újépítésű lakás" },
  { image: p2, title: "Eladó Családi ház" },
  { image: p3, title: "Kiadó Panel lakás" },
];

function PopularProperties() {

  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    request(`/api/property/homepage-ads`)
    .then(data => {
      setProperties(data.data);
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
    })
  }, []);

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <div className="w-full px-8 md:px-0 md:w-10/12 mx-auto py-8 my-4 relative mb-40">
        <div className="section-heading flex gap-3">
          <img src={orangeStar} />
          <span>
            <span className="text-blue">Kiemelt</span> ingatlanok
          </span>
        </div>
        <div className="my-2">
          <p className="text-lightgrey">
            Nézzen körül kiemelt ingatlan ajánlataink között!
          </p>
        </div>
        <div className="w-full overflow-auto md:overflow-visible">
        <div className="py-10 inline-block w-[300%] md:w-full md:grid grid-cols-3 gap-6 mt-8 justify-items-stretch z-40 relative">
          {properties.map((property) => isMobile ? (
            <div className="w-[30%] inline-block mx-[1%]">
              <PropertyCard property={property} />
            </div>
          ) : (
            <PropertyCard property={property} />
          ))}
        </div>
        </div>
        <div className="absolute w-[300px] md:w-[400px] -mt-48 right-[-17%] -mr-2/12 z-0">
          <img src={illus} />
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
}

export default PopularProperties;

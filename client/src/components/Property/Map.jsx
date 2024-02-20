import React from "react";
import map from "../../pictures/map.png";
import pin from "../../icons/ping.svg";
import Map from "../Elements/Maps";

function PropertyMap({ centerLocation }) {
  return (
    <div className="p-6 bg-white rounded-2xl light-card-shadow">
      <p className="card-heading">Ingatlan elhelyezkedése</p>
      <div className="mt-4 relative h-96 w-full z-0">
        <Map
          centerLocation={centerLocation || "1013 Budapest Lánchíd utca 1"}
        />
      </div>
    </div>
  );
}

export default PropertyMap;

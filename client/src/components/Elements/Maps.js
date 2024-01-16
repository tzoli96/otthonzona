import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L, { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Loading from "./Loading";
import ottonIcon from "../../pictures/pinIcon.svg";

function Map({ centerLocation, zoom }) {
  const [position, setPosition] = useState([0, 0]);
  const [loading, setLoading] = useState(false);

  const icon = new L.Icon({
    iconUrl: ottonIcon,
    iconSize: new L.Point(40, 40),
  });

  useEffect(() => {
    if (centerLocation) {
      setLoading(true);
      const provider = new OpenStreetMapProvider();
      provider
        .search({ query: centerLocation })
        .then((d) => {
          setPosition(d?.[0]?.bounds?.[0]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [centerLocation]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <MapContainer center={position} zoom={zoom || 16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://map.otthonzona.com/tile/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>{centerLocation}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

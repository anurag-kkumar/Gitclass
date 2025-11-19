import React, { useEffect } from "react";
import L from "leaflet";

const CrimeMap = ({ latitude, longitude, title, city }) => {
  useEffect(() => {
    if (!latitude || !longitude) return;

    const map = L.map("crimeMap").setView([latitude, longitude], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`<b>${title}</b><br>${city}`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [latitude, longitude, title, city]);

  return (
    <div
      id="crimeMap"
      className="w-full h-[350px] rounded-xl overflow-hidden"
    ></div>
  );
};

export default CrimeMap;

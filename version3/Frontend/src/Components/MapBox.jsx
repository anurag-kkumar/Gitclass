// import React, { useEffect } from "react";
// import L from "leaflet";

// const MapBox = ({ selectedLocation }) => {
//   useEffect(() => {
//     const map = L.map("mymap").setView([27.5, 77.6], 8);

//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//     // Update marker whenever selectedLocation changes
//     if (selectedLocation) {
//       L.marker([selectedLocation.lat, selectedLocation.lng])
//         .addTo(map)
//         .bindPopup(selectedLocation.title)
//         .openPopup();

//       map.setView([selectedLocation.lat, selectedLocation.lng], 13);
//     }

//     return () => map.remove();
//   }, [selectedLocation]);

//   return <div id="mymap" className="h-full w-full"></div>;
// };

// export default MapBox;


// File: src/Components/MapBox.jsx
// File: src/Components/MapBox.jsx
// File: src/Components/MapBox.jsx
// File: src/Components/MapBox.jsx
import React, { useEffect, useRef } from "react";
import L from "leaflet";

const MapBox = ({ selectedLocation, userLocation, newsLocations = [] }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("mymap").setView([27.5, 77.6], 8);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Remove previous markers
    if (map.markers) {
      map.markers.forEach((m) => map.removeLayer(m));
    }
    map.markers = [];

    const bounds = [];

    // Add user location as red circle marker with "ME" tooltip
    if (userLocation) {
      const userMarker = L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 8,        // size of the circle
        color: "red",     // circle border color
        fillColor: "red", // fill color
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip("ME", { permanent: true, direction: "top", offset: [0, -10] });

      map.markers.push(userMarker);
      bounds.push([userLocation.lat, userLocation.lng]);
    }

    // Add all news/crime markers
    newsLocations.forEach((loc) => {
      const marker = L.marker([loc.latitude, loc.longitude])
        .addTo(map)
        .bindPopup(`<b>${loc.title}</b><br>${loc.city}`);
      map.markers.push(marker);
      bounds.push([loc.latitude, loc.longitude]);
    });

    // Fit map to bounds if there are markers
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    // If a selected location is passed, just open its popup (no highlight)
    if (selectedLocation) {
      const marker = L.marker([selectedLocation.lat, selectedLocation.lng])
        .addTo(map)
        .bindPopup(selectedLocation.title)
        .openPopup();
      map.markers.push(marker);
    }
  }, [selectedLocation, userLocation, newsLocations]);

  return <div id="mymap" className="w-full h-full rounded-xl overflow-hidden"></div>;
};

export default MapBox;

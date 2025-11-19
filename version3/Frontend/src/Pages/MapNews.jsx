// import React, { useEffect, useState, useContext } from "react";
// import MapBox from "../Components/MapBox";
// import Nav from "../Components/Nav";
// import Menu from "../Components/Menu";
// import Footer from "../Components/Footer";
// import { UserContext } from "../context/UserContext";

// const MapNews = () => {
//   const { user } = useContext(UserContext);

//   const [ismenuopen, setIsMenuOpen] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const [news, setNews] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const CITIES = ["delhi", "Mathura", "Agra"];
//   const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

//   // Fetch all news
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setNews(data));
//   }, []);

//   // Filter news by city
//   const filterNews = (city) => {
//     if (city === "OTHER") {
//       const otherNews = news.filter(
//         (item) =>
//           !CITIES.includes(item.city) &&
//           item.city.toLowerCase() !== (user ? user.city.toLowerCase() : "")
//       );
//       setFiltered(otherNews);
//     } else {
//       const cityNews = news.filter(
//         (item) => item.city.toLowerCase() === city.toLowerCase()
//       );
//       setFiltered(cityNews);
//     }
//   };

//   // Build list of cities for buttons
//   const allCities = [...CITIES];
//   if (user && !CITIES.includes(user.city)) allCities.push(user.city);
//   allCities.push("OTHER");

//   return (
//     <div className="flex flex-col w-full min-h-screen bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] bg-cover bg-center">

//       {/* NAVBAR */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Nav
//           ismenuopen={ismenuopen}
//           setismenuopen={setIsMenuOpen}
//           setLoggedIn={setLoggedIn}
//         />
//       </div>

//       {/* MENU */}
//       {ismenuopen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-40 w-[85%]">
//           <Menu setismenuopen={setIsMenuOpen} />
//         </div>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="flex h-screen pt-24 px-6 md:px-12 gap-4">

//         {/* LEFT SIDE LIST */}
//         <div className="w-[35%] bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-y-scroll shadow-lg">

//           {/* FILTER BUTTONS */}
//           <div className="flex gap-3 p-4 flex-wrap">
//             {allCities.map((city) => (
//               <button
//                 key={city}
//                 onClick={() => filterNews(city)}
//                 className="px-4 py-2 bg-[#E0FF00] text-black font-semibold rounded-full shadow hover:bg-blue-600 hover:text-white transition text-sm"
//               >
//                 {city}
//               </button>
//             ))}
//           </div>

//           {/* NEWS LIST */}
//           <div className="p-4 space-y-4">
//             {filtered.length === 0 ? (
//               <p className="text-gray-300 text-center">No News Selected</p>
//             ) : (
//               filtered.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() =>
//                     setSelectedLocation({
//                       lat: item.latitude,
//                       lng: item.longitude,
//                       title: item.headline,
//                     })
//                   }
//                   className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow cursor-pointer hover:bg-white/20 transition"
//                 >
//                   <h3 className="font-bold text-white">{item.headline}</h3>
//                   <p className="text-sm text-gray-300">{item.city}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* RIGHT SIDE MAP */}
//         <div className="w-[65%] rounded-xl overflow-hidden shadow-xl border border-white/10">
//           <MapBox selectedLocation={selectedLocation} />
//         </div>

//       </div>

//       <Footer className="pt-10" />
//     </div>
//   );
// };

// export default MapNews;

// File: src/Pages/MapNews.jsx
import React, { useState, useEffect, useContext } from "react";
import MapBox from "../Components/MapBox";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { UserContext } from "../context/UserContext";

// Haversine formula to calculate distance in km
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const MapNews = () => {
  const { user } = useContext(UserContext);

  const [ismenuopen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const CITIES = ["delhi", "Mathura", "Agra"];
  const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

  // Fetch all news
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  // Filter news by city
  const filterNews = (city) => {
    if (city === "OTHER") {
      const otherNews = news.filter(
        (item) =>
          !CITIES.includes(item.city) &&
          item.city.toLowerCase() !== (user ? user.city.toLowerCase() : "")
      );
      setFiltered(otherNews);
    } else {
      const cityNews = news.filter(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );
      setFiltered(cityNews);
    }
  };

  // Build list of cities for buttons
  const allCities = [...CITIES];
  if (user && !CITIES.includes(user.city)) allCities.push(user.city);
  allCities.push("OTHER");

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        (err) => console.error(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-cover bg-center bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)]">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav
          ismenuopen={ismenuopen}
          setismenuopen={setIsMenuOpen}
          setLoggedIn={setLoggedIn}
        />
      </div>

      {/* MENU */}
      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 w-[85%]">
          <Menu setismenuopen={setIsMenuOpen} />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex h-screen pt-24 px-6 md:px-12 gap-4">
        {/* LEFT SIDE LIST */}
        <div className="w-[35%] bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-y-scroll shadow-lg">
          {/* FILTER BUTTONS */}
          <div className="flex gap-3 p-4 flex-wrap">
            {allCities.map((city) => (
              <button
                key={city}
                onClick={() => filterNews(city)}
                className="px-4 py-2 bg-[#E0FF00] text-black font-semibold rounded-full shadow hover:bg-blue-600 hover:text-white transition text-sm"
              >
                {city}
              </button>
            ))}
          </div>

          {/* NEWS LIST */}
          <div className="p-4 space-y-4">
            {filtered.length === 0 ? (
              <p className="text-gray-300 text-center">No News Selected</p>
            ) : (
              filtered.map((item) => {
                // Calculate distance from user
                const distance =
                  userLocation &&
                  getDistanceFromLatLonInKm(
                    userLocation.lat,
                    userLocation.lng,
                    item.latitude,
                    item.longitude
                  ).toFixed(2);

                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      setSelectedLocation({
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.headline,
                      })
                    }
                    className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow cursor-pointer hover:bg-white/20 transition"
                  >
                    <h3 className="font-bold text-white">{item.headline}</h3>
                    <p className="text-sm text-gray-300">{item.city}</p>
                    {distance && (
                      <p className="text-sm text-yellow-300">
                        {distance} km from ME
                      </p>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="w-[65%] rounded-xl overflow-hidden shadow-xl border border-white/10">
          <MapBox
            selectedLocation={selectedLocation}
            userLocation={userLocation}
            newsLocations={filtered}
          />
        </div>
      </div>

      <Footer className="pt-10" />
    </div>
  );
};

export default MapNews;

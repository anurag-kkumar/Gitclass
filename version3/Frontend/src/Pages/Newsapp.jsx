import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { UserContext } from "../context/UserContext";

const Newsapp = () => {
  const { user } = useContext(UserContext);

  const [ismenuopen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState(user ? user.city : "");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

  // Fetch news data
  const getData = async (queryCity) => {
    try {
      setLoading(true);
      const query =
        queryCity.trim() === ""
          ? API_URL
          : `${API_URL}?city=${queryCity.charAt(0).toUpperCase() + queryCity.slice(1).toLowerCase()}`;

      const response = await fetch(query);
      const jsonData = await response.json();
      setNewsData(jsonData.slice(0, 12)); // limit to 12 cards
    } catch (error) {
      console.error("Fetch Error:", error);
      setNewsData([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on initial load and when search changes
  useEffect(() => {
    if (search) getData(search);
  }, [search]);

  // Handle typing in search input
  const handleInput = (e) => setSearch(e.target.value);

  // Handle category button click
  const handleCategory = (city) => setSearch(city);

  // If user info not loaded yet
  if (!user) return <div className="text-center mt-32 text-white">Loading user info...</div>;

  return (
    <div className="bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] w-full min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav ismenuopen={ismenuopen} setismenuopen={setIsMenuOpen} />
      </div>

      {/* Menu */}
      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <Menu setismenuopen={setIsMenuOpen} />
        </div>
      )}

      {/* Search + Categories */}
      <div className="w-full flex flex-col items-center pt-28">
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-[320px] sm:w-[400px] bg-white shadow-md rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Search by city…"
            value={search}
            onChange={handleInput}
            className="flex-1 bg-transparent outline-none text-gray-800 px-2"
          />
          <button
            onClick={() => getData(search)}
            className="bg-[#E0FF00] text-black px-4 py-1.5 text-sm rounded-full hover:bg-blue-700 transition font-medium"
          >
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Delhi", "Mumbai", "Noida", "Pune", "Jaipur"].map((city) => (
            <button
              key={city}
              onClick={() => handleCategory(city)}
              className="px-5 py-2 rounded-full bg-white text-gray-700 shadow hover:bg-blue-600 hover:text-white font-medium capitalize transition"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 mt-8">
        {loading ? (
          <p className="text-white text-center mt-12">Loading news...</p>
        ) : newsData.length > 0 ? (
          <Card data={newsData} />
        ) : (
          <p className="text-white text-center mt-12">No news found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Newsapp;

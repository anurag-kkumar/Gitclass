import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


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

const Profile = () => {
    const navigate=useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

  // Load user profile
  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          localStorage.removeItem("token");
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  // Get user geolocation
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

  // Fetch news and filter within 20 km
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!userLocation) return;

      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const nearby = data.filter((item) => {
          const distance = getDistanceFromLatLonInKm(
            userLocation.lat,
            userLocation.lng,
            item.latitude,
            item.longitude
          );
          return distance <= 20;
        });

        setNotifications(nearby);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNotifications();
  }, [userLocation]);

  if (loading) return <h2 className="text-white p-6">Loading...</h2>;
  if (!user) return <h2 className="text-white p-6">No user found. Login again.</h2>;

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Top Blue Bar */}
      <div className="bg-[#E0FF00] text-black rounded-xl p-4 flex justify-between items-center mb-10">
        <h1 className="text-sm font-semibold">MY PROFILE</h1>
        <button className="px-4 py-1 bg-black text-white rounded-lg text-sm"
        onClick={() => navigate("/home")}
        >HOME</button>
      </div>

      
      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png"
              alt="profile"
              className="w-28 h-28 rounded-full"
            />
           
          </div>

           <div className="border rounded-2xl p-6 mb-6 flex flex-col gap-4 bg-white shadow-sm">

  {/* Single Item */}
  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Your Name</span>
    <p className="font-semibold text-gray-800">{user.firstname} {user.lastname}</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Email</span>
    <p className="font-semibold text-gray-800">  {user.email}</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Gender</span>
    <p className="font-semibold text-gray-800">{user.gender}</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">City</span>
    <p className="font-semibold text-gray-800">{user.city}</p>
  </div>

</div>



 </div>

 {/* Right Card */}
        


      {/* <div className="bg-gray-800 p-6 rounded-xl w-[350px] shadow-lg">
        <p className="text-lg"><b>Name:</b> {user.firstname} {user.lastname}</p>
        <p className="text-lg"><b>Email:</b> {user.email}</p>
        <p className="text-lg"><b>ID:</b> {user._id}</p>
        <p className="text-lg"><b>Gender:</b> {user.gender}</p>
        <p className="text-lg"><b>City:</b> {user.city}</p>
      </div> */}

      {/* Notification Section */}
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Nearby Crime Alerts (≤ 20 km)</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-300">No nearby news/crimes found.</p>
        ) : (
          <ul className="space-y-3">
            {notifications.map((item) => {
              const distance = getDistanceFromLatLonInKm(
                userLocation.lat,
                userLocation.lng,
                item.latitude,
                item.longitude
              ).toFixed(2);

              return (
                <li
                  key={item.id}
                  className="bg-gray-300 p-4 rounded-lg border border-gray-700 hover:bg-gray-100 transition"
                >
                  <p className="font-bold">{item.headline}</p>
                  <p className="text-sm text-gray-400">{item.city}</p>
                  <p className="text-sm text-red-900">{distance} km from ME</p>
                  <a className="text-sm text-red-900" href={item.link}>{item.link} </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Profile;

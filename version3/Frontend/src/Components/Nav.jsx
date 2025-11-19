import { useEffect, useRef, useState } from "react"
import Menu from "./Menu";
import LogginForm from "./LogginForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Nav({ ismenuopen, setismenuopen, setLoggedIn }) {
const { user } = useContext(UserContext); // 👈 get data here
const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


    const navigate = useNavigate()
const handleLogout = () => {
  setLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};

        

  return (
    <div className="text-white flex flex-row justify-around  pt-5 backdrop-blur-xs">
        <div className="flex flex-row">
            <img src="https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65877317a643aef5d531635e_Symbol_White.svg" 
        alt="logo"
        width="50px"
        height="40px" />
        <h1 className="p-3 ">GEOPRESS</h1>
        </div>
        <div className="flex flex-row justify-center">
            <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
            <h2 className="p-3">{ismenuopen?"Menu":"Welcome"}</h2>
        </div>
        {/* buttoms  */}
       <div className="flex flex-row justify-center gap-5">
        
         <button 
        
        className="border-[#E0FF00]  flex flex-row justify-center gap-4 items-center border-2 rounded-3xl w-[170px] h-[52px] hover:translate-x-2 " onClick={()=>
            setismenuopen(!ismenuopen)
        }>

          {ismenuopen?"close":"Menu"}
          <div className="flex flex-col justify-between w-6 h-4 cursor-pointer group">
<span className="block h-0.5 w-full bg-[#E0FF00] rounded transition-all duration-300 group-hover:translate-y-0.5"></span>
<span className="block h-0.5 w-full bg-[#E0FF00] rounded transition-all duration-300 group-hover:-translate-y-0.5"></span>
</div>
          </button>

        <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2  w-[100px] h-[50px] rounded-full "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        {/* <span className="font-medium">Joseph</span> */}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 z-50 animate-fade">
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-800">
              
             {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
              
              </p>
            <p className="text-xs text-gray-500 truncate">
              
              {user ? `${user.email}` : "Loading..."}</p>
          </div>

          <ul className="p-2 text-sm font-medium text-gray-600">
            <li>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 hover:text-gray-900"
              onClick={() => navigate("/profile")}

              >
                User information
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 hover:text-gray-900">
               {user ? `${user.city}` : "Loading..."}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 hover:text-gray-900">
                Settings
              </button>
            </li>
            <li>
               {/* logoutpage  */}
           <button 
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 hover:text-gray-900"
        onClick={handleLogout}
        >
          logout 
          </button>
            </li>
          </ul>
        </div>
      )}
    </div>

       </div>
    </div>
  )
}

export default Nav
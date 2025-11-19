import React, { useState } from "react";
import './Title.css'
// import Register from "./Register";
import { useNavigate } from "react-router-dom";

const postersLeft = [
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161109.png?updatedAt=1763205239512",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161101.png?updatedAt=1763205239497",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20160954.png?updatedAt=1763205239137",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161022.png?updatedAt=1763205239138",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161115.png?updatedAt=1763205239132",
];

const postersRight = [
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20160946.png?updatedAt=1763205239561",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161054.png?updatedAt=1763205239516",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20160938.png?updatedAt=1763205239522",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161115.png?updatedAt=1763205239132",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161012.png?updatedAt=1763205239134",
];



export default function Title() {
// const [reg,setreg]=useState(false);
let navigate=useNavigate();
function onclicHandler(){
  navigate("/login");
}
function onclicHandlersignup(){
  navigate("/signup")
}

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-6 relative overflow-hidden">

      {/* LEFT SIDE SCROLL (DOWN) */}
      <div className="hidden md:block absolute left-4 top-0 h-full overflow-hidden">
        <div className="scroll-down flex flex-col gap-4">
          {[...postersLeft, ...postersLeft].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 rounded-xl" />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE SCROLL (UP) */}
      <div className="hidden md:block absolute right-4 top-0 h-full overflow-hidden">
        <div className="scroll-up flex flex-col gap-4">
          {[...postersRight, ...postersRight].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 rounded-xl" />
          ))}
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="text-center max-w-2xl z-10">
<div className="flex flex-row justify-center gap-5">
    <img src="https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65877317a643aef5d531635e_Symbol_White.svg" 
        alt="logo"
        width="50px"
        height="40px" />
        <h1 className="text-[#E0FF00] text-5xl font-bold  ">GEOPRESS</h1>

</div>
        <h2 className="text-white text-6xl font-extrabold leading-tight">
          FIND NEWS <br /> THAT MATTERS
        </h2>

        <p className="text-gray-300 text-lg mt-4">
          Stay informed, track nearby incidents, and explore verified location-based alerts with a community that values safety and awareness.
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <button className="px-8 py-3 bg-purple-600  text-white rounded-full font-semibold hover:bg-[#E0FF00] hover:text-black"
          onClick={onclicHandler}
          >
            Login
          </button>
          <button className="px-8 py-3 bg-purple-600  text-white rounded-full font-semibold hover:bg-[#E0FF00] hover:text-black"
          onClick={onclicHandlersignup}
          >
            Signup
          </button>
          
        </div>
      </div>
    </div>
  );
}

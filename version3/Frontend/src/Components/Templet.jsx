// import Signup from "../Pages/Signup";
import "./Templet.css";
import LogginForm from "./LogginForm";
import SignupForm from "./SignupForm";

const posters = [
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161109.png?updatedAt=1763205239512",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161101.png?updatedAt=1763205239497",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20160954.png?updatedAt=1763205239137",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161022.png?updatedAt=1763205239138",
  "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot%202025-11-15%20161115.png?updatedAt=1763205239132",
];

// Reusable poster column function
const PosterColumn = ({ direction }) => (
  <div className={`flex flex-col gap-6 ${direction === "up" ? "animate-up" : "animate-down"}`}>
    {[...posters, ...posters].map((src, i) => (
      <img
        key={i}
        src={src}
        alt="poster"
        className="w-44 rounded-2xl shadow-lg object-cover"
      />
    ))}
  </div>
);

const Templet = ({ formtypes, setLoggedIn }) => {
  return (
    <div className="w-full h-screen flex bg-black text-white overflow-hidden">

      {/* LEFT SECTION - POSTERS */}
      <div className="hidden md:flex w-1/2 h-full justify-evenly px-4 py-8">
        <PosterColumn direction="up" />
        <PosterColumn direction="down" />
        <PosterColumn direction="up" />
      </div>

      {/* RIGHT SECTION - LOGIN/SIGNUP */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        {formtypes === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LogginForm setLoggedIn={setLoggedIn} />
        )}
      </div>
    </div>
  );
};

export default Templet;

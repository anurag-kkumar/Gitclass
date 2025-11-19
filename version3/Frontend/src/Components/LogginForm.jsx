import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogginForm = ({ setLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   setLoggedIn(true);
  //    localStorage.setItem("isLoggedIn", "true");   // <-- ADD THIS
  //   toast.success("Logged in");
  //   navigate("/home");
  // }
  async function submitHandler(event) {
  event.preventDefault();

  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    toast.error(data.message);
    return;
  }

  localStorage.setItem("token", data.token); // SAVE JWT
  setLoggedIn(true);
  toast.success("Login successful");
  navigate("/home");
}


  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-md p-6 space-y-5 bg-gray-900 rounded-2xl shadow-lg text-white"
    >
      {/* Email */}
      <label className="block">
        <p className="mb-1 font-medium">
          Email Address <sup className="text-red-400">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter email"
          onChange={changeHandler}
          name="email"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </label>

      {/* Password */}
      <label className="block relative">
        <p className="mb-1 font-medium">
          Password <sup className="text-red-400">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter your password"
          onChange={changeHandler}
          name="password"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        {/* Eye Icon */}
        <span
          className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-white"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </label>

      {/* Forgot Password */}
      <button
        to="#"
        className="block text-sm text-blue-400 hover:underline ml-auto w-fit"
      onClick={() => navigate("/")}
      >
        back to signup
      </button>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-[#E0FF00] text-black hover:bg-blue-700 transition font-semibold"
      >
        Sign In
      </button>
    </form>
  );
};

export default LogginForm;

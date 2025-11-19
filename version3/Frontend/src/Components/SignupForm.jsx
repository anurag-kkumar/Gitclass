import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    city: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showpassword, setShowPassword] = useState(false);
  const [showcpassword, setShowcPassword] = useState(false);

  const navigate = useNavigate();

  function changehandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const bodyToSend = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      city: formData.city,
    };

    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyToSend),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    setLoggedIn(true);
    toast.success("Account created successfully!");
    navigate("/home");
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-xl shadow-lg">
      <form onSubmit={submitHandler} className="space-y-4">

        {/* First + Last Name */}
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="mb-1 font-medium text-white">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              required
              value={formData.firstname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            />
          </label>

          <label className="w-1/2">
            <p className="mb-1 font-medium text-white">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              required
              value={formData.lastname}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            />
          </label>
        </div>

        {/* Gender + City */}
        <div className="flex gap-4">
          <label className="w-1/2">
            <p className="mb-1 font-medium text-white">
              Gender <sup className="text-red-500">*</sup>
            </p>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="w-1/2">
            <p className="mb-1 font-medium text-white">
              City <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p className="mb-1 font-medium text-white">
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={changehandler}
            className="w-full border rounded-lg px-3 py-2"
          />
        </label>

        {/* Password */}
        <div className="relative">
          <label>
            <p className="mb-1 font-medium text-white">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showpassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            />
          </label>

          <span
            onClick={() => setShowPassword(!showpassword)}
            className="absolute right-3 bottom-3 text-white cursor-pointer text-xl"
          >
            {showpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label>
            <p className="mb-1 font-medium text-white">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showcpassword ? "text" : "password"}
              name="confirmpassword"
              required
              value={formData.confirmpassword}
              onChange={changehandler}
              className="w-full border rounded-lg px-3 py-2"
            />
          </label>

          <span
            onClick={() => setShowcPassword(!showcpassword)}
            className="absolute right-3 bottom-3 text-white cursor-pointer text-xl"
          >
            {showcpassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <button className="w-full mt-4 bg-yellow-300 text-black py-2 rounded-lg font-semibold">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

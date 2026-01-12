import React, { useState } from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom';


function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
   password: "",
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // API call goes here
  };

  return (
    <div className="w-full min-h-screen flex">

      <div className="bg-blue-950 w-[20%] min-h-screen p-10 text-white flex flex-col gap-6">
        <img src={logo} alt="PubNub" className="h-8 w-fit" />

        <h1 className="text-5xl font-bold text-white">Contact our experts!</h1>

        <p className="text-md opacity-90">
          Tell us a bit about yourself by filling out the form and we'll get back
          to you within 24 hours to help you:
        </p>

        <ul className="text-sm space-y-2 ">
          <li>✔ Understand how our product can fit your needs</li>
          <li>✔ Discover the capabilities and answer your questions</li>
          <li>✔ Talk about product options and pricing</li>
        </ul>
      </div>

    <div className="w-[50%] flex justify-center items-center border border-gray-200 rounded-xl m-auto mt-10 p-10 bg-white">
  <form
    onSubmit={handleSubmit}
    className="w-[60%] flex flex-col gap-4"
  >
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl font-bold">
        Register for Free
      </h2>

      <div className="flex gap-3 items-center text-sm">
        <span className="text-gray-500">or</span>
        <Link to='/login'>
        <button
          type="button"
          className="px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-black hover:bg-gray-200"
        >
          Login
        </button></Link>
      </div>
    </div>

    {/* First Name */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">First Name *</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="border border-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Last Name */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Last Name *</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="border border-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Password *</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="border border-gray-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="mt-4 bg-red-600 text-white py-2.5 rounded-md font-semibold hover:bg-red-700 transition"
    >
      Register
    </button>
  </form>
</div>

    </div>
  );
}

export default Register;

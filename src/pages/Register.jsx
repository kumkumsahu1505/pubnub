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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SECTION */}
      <div className="hidden lg:flex bg-blue-950 w-[30%] min-h-screen p-10 text-white flex-col gap-6">
        <img src={logo} alt="PubNub" className="h-8 w-fit" />

        <h1 className="text-4xl font-bold">
          Contact our experts!
        </h1>

        <p className="text-md opacity-90">
          Tell us a bit about yourself and we’ll get back within 24 hours to:
        </p>

        <ul className="text-sm space-y-2">
          <li>✔ Understand your needs</li>
          <li>✔ Explain product capabilities</li>
          <li>✔ Discuss pricing options</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-1 justify-center items-center px-4 py-10">
        <div className="w-full max-w-md md:max-w-lg bg-white border border-gray-200 rounded-xl p-6 md:p-10">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                Register for Free
              </h2>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">or</span>
                <Link to="/login">
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-gray-100 border rounded-lg hover:bg-gray-200"
                  >
                    Login
                  </button>
                </Link>
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
                className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
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
                className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
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
                className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
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
                className="border rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
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

    </div>
  );
}

export default Register;

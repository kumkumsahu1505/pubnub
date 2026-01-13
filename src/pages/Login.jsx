import React, { useState } from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT SECTION */}
      <div className="bg-blue-950 w-full md:w-[35%] lg:w-[30%] min-h-auto md:min-h-screen p-6 md:p-10 text-white flex flex-col gap-6">
        <img src={logo} alt="PubNub" className="h-8 w-fit" />

        <h1 className="text-3xl md:text-5xl font-bold">
          Contact our experts!
        </h1>

        <p className="text-sm md:text-md opacity-90">
          Tell us a bit about yourself by filling out the form and we'll get back
          to you within 24 hours to help you:
        </p>

        <ul className="text-sm space-y-2">
          <li>✔ Understand how our product can fit your needs</li>
          <li>✔ Discover the capabilities and answer your questions</li>
          <li>✔ Talk about product options and pricing</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-[65%] lg:w-[70%] flex justify-center items-center p-6">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[55%] border border-gray-200 rounded-xl p-6 md:p-10 bg-white">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                Login for Free
              </h2>

              <div className="flex gap-2 items-center text-sm">
                <span className="text-gray-500">or</span>
                <Link to="/login">
                  <button
                    type="button"
                    className="px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200"
                  >
                    Login
                  </button>
                </Link>
              </div>
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
                className="border border-gray-400 rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
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
                className="border border-gray-400 rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <p className="text-rose-700 text-sm text-right cursor-pointer">
              Forgot your password?
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="mt-3 bg-red-700 text-white py-2.5 rounded-md font-semibold hover:bg-red-800 transition"
            >
              Login
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;

import React, { useState } from 'react'
import logo from '../assets/pubnub_logo.png'

function ContactControlForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    useCase: "",
    country: "",
    message: "",
    subscribe: true
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
      <div className="w-full md:w-[65%] lg:w-[70%] flex justify-center items-start md:items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[80%] lg:w-[60%] flex flex-col gap-4"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Find out how PubNub can help your business
          </h2>

          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          />

          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          />

          <label>Company Name *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          />

          <label>Use Case</label>
          <select
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          >
            <option value="">Select...</option>
            <option value="chat">Chat</option>
            <option value="notifications">Notifications</option>
            <option value="iot">IoT</option>
          </select>

          <label>Select Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-xl p-2"
          >
            <option value="">Select...</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="resize-none border border-gray-400 rounded-xl p-2 mt-2"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to PubNub Newsletter & Updates
          </label>

          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactControlForm;

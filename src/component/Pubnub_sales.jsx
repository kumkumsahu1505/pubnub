import React from 'react'
import image1 from '../assets/e-commerce.9cb85a81.png'
import image2 from '../assets/healthcare.983824c0.png'
import image3 from '../assets/live-events.da89afc2.png'
import image4 from '../assets/emoji.44776ab0.png'
import { Link } from "react-router-dom";

function Pubnub_sales() {
  return (
    <div className="bg-[#001143] min-h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 py-20 gap-16 overflow-x-hidden">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[50%] flex flex-col gap-8 text-center lg:text-left md:pt-10">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl leading-tight">
          The market leading platform for real-time interactive apps
        </h1>

        <h3 className="text-white font-light text-sm md:text-base">
          The PubNub promise: real-time innovation. Efficiently and effectively build,
          manage, and monetize engaging apps that captivate and delight users.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link to="/register">
            <button className="text-white px-8 py-4 border border-blue-400 rounded-lg bg-blue-950 shadow-xl shadow-blue-900">
              Start Building
            </button>
          </Link>

          <Link to="/contactForm">
            <button className="bg-white px-8 py-4 text-black rounded-lg">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative w-full lg:w-[50%] h-[300px] md:h-[400px] flex justify-center hidden lg:inline-block md:inline-block">
        <img
          src={image1}
          alt=""
          className="absolute top-8 left-1/4 w-40 md:w-52 z-10"
        />

        <img
          src={image2}
          alt=""
          className="absolute top-20 left-0 md:left-10 w-44 md:w-60 z-20 opacity-80 shadow-2xl shadow-blue-500"
        />

        <img
          src={image3}
          alt=""
          className="absolute top-40 left-1/3 w-40 md:w-52 z-30"
        />

        <img
          src={image4}
          alt=""
          className="absolute top-56 left-2/3 w-12 md:w-20 z-40"
        />
      </div>

    </div>
  )
}

export default Pubnub_sales

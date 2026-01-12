import React from "react";
import image1 from '../assets/office-workplace-with-laptop-smartphone.jpg'

import {Link} from 'react-router-dom'
function Expert() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-7xl w-full flex gap-8">

        {/* LEFT CARD */}
        <div className="bg-blue-100 w-[35%] p-10 rounded-2xl border border-blue-300 flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-black">
            Start building
          </h1>

          <h3 className="text-xl font-semibold text-black">
            Get started building real-time apps now!
          </h3>

          <ul className="space-y-3 text-lg text-gray-800">
            <li>✔ Always free for up to 200 MAUs</li>
            <li>✔ No Credit Card Required</li>
            <li>✔ Every PubNub SDK available</li>
            <li>✔ Complete Feature Access to 100+ Integrations</li>
          </ul>

          <Link to='/contactForm' className="text-red-600 font-medium mt-4">
            Learn more →
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[65%] flex flex-col gap-8">

          {/* TOP RIGHT CARD */}
          <div className="flex border border-blue-300 rounded-2xl overflow-hidden">

            <div className="p-10 flex flex-col gap-6 w-[60%]">
              <h1 className="text-4xl font-bold text-black">
                Talk to an expert
              </h1>

              <p className="text-lg text-gray-800">
                Let us share with you industry best practices and how we
                can help you accelerate your real-time application and
                growth.
              </p>

              <Link to='/contactForm' className="bg-red-600 text-white px-6 py-3 rounded-md w-fit">
                Contact us
              </Link>
            </div>

            <div className="w-[40%] ">
              <img
                src={image1}
                alt="expert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="bg-blue-100 p-10 rounded-2xl border border-blue-300 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-black">
              See our pricing
            </h1>

            <p className="text-lg text-gray-800">
              Almost limitless pricing options from simple pay-as-you-go
              to custom models to best match your business needs and
              growth objectives.
            </p>

            <a href="#" className="text-red-600 font-medium">
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expert;

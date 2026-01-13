import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/office-workplace-with-laptop-smartphone.jpg'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'

function DeveloperHome() {
  return (
    <>
    <NavBar/>

    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 pt-10">
          PubNub for Developers
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-red-600 text-4xl mb-6">📄</div>
            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
            <p className="text-gray-600 text-sm">
              Get started quickly with PubNub’s SDKs, APIs and 3rd party
              integrations
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-red-600 text-4xl mb-6">🔄</div>
            <h3 className="text-xl font-semibold mb-3">Live Code Tour</h3>
            <p className="text-gray-600 text-sm">
              Explore PubNub's core features in our interactive live coding
              tour
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-red-600 text-4xl mb-6">🎬</div>
            <h3 className="text-xl font-semibold mb-3">Tutorials</h3>
            <p className="text-gray-600 text-sm">
              Start building chat, geolocation, IOT solutions, and more with
              step-by-step tutorials
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-red-600 text-4xl mb-6">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Blog</h3>
            <p className="text-gray-600 text-sm">
              Understand key concepts to architect and build your application
              with PubNub
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-red-600 text-4xl mb-6">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Demos</h3>
            <p className="text-gray-600 text-sm">
              Working demos and sample code of data streams in action.
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* Contact support */}
     <div className="w-full flex justify-center py-16 px-0 md:px-10 lg:px-30 ">
                <div className="w-[90%]  bg-white text-black border border-blue-200 rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-6 p-12 md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold ">
                              Contact sales
                            </h1>

                            <p className=" text-lg">
                             Start building real-time experiences today. Try PubNub for free or contact sales to get started.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link
                                    to="/contactForm"
                                    className="bg-red-600 text-white px-6 py-3 rounded-md text-center"
                                >
                                    Contact Sales
                                </Link>

                                <Link
                                    to="/login"
                                    className="border border-gray-300 px-6 py-3 rounded-md text-center text-black"
                                >
                                    Try for Free
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="md:w-1/2">
                            <img
                                src={image1}
                                alt="Contact support"
                                className="w-full h-[350px] object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
    </>
  )
}

export default DeveloperHome
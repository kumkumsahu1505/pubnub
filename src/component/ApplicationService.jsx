import React from 'react'
import ApplicationServiceCard from './ApplicationServiceCard'
import { Link } from 'react-router-dom'
import image1 from '../assets/office-workplace-with-laptop-smartphone.jpg'
function ApplicationService() {
    return (
        <div className="bg-white w-full py-20 mx-auto">

            <div className="text-center max-w-4xl mx-auto text-black mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Applications Services
                </h2>
                <p className="text-gray-500 text-lg">
                    Build smarter, more interactive apps with real-time context, control, and communication tools.
                </p>
            </div>
            <ApplicationServiceCard />



            <div className="text-center max-w-4xl mx-auto text-black mb-12 md:mb-16 mt-16 md:mt-20 px-4 ">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Multi-Language, Multi-Platform
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Accelerate development with tools and SDKs built for speed, scale, and AI-powered productivity.
                </p>
            </div>

            <div className="w-full md:w-[80%] py-12 md:py-16 px-4 md:px-8 mx-auto">
                <div className="bg-[#031143] text-white rounded-2xl p-8 md:p-16 lg:p-25 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-sm">Support for</p>
                        <h2 className="text-2xl md:text-3xl font-bold">50+ SDKs</h2>
                        <a href="#" className="text-sm mt-2 inline-block">
                            See all →
                        </a>
                    </div>

                    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                        {["U", "C#", "Unity", "Swift", "Python", "Kotlin", "JS", "Java"].map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-md px-2 md:px-8 flex items-center justify-center text-sm font-semibold"
                                >
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 items-start">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F9b5a48704db2409684beceadd734124f?format=webp&width=2000" alt="" className="rounded-2xl w-full h-auto object-cover" />
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-4">
                            Built-in AI Coding Assistance
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Speed up development with your favorite AI tools. Popular LLMs
                            are already trained on the platform’s APIs, making it easy to
                            generate functions, integrate services, and bring real-time
                            features to life—faster.
                        </p>

                        <a href="#" className="text-sm md:text-md mt-5 text-gray-600 inline-block">
                            Learn more
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-20 items-start">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-4">
                            Solution Kits & Templates
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Jumpstart your project with curated kits, templates, and
                            how-to guides built around proven real-time use cases.
                            Save time and reduce risk with pre-tested components.
                        </p>

                        <a href="#" className="text-sm md:text-md mt-5 text-gray-600 inline-block">
                            Learn more
                        </a>
                    </div>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1fcb015a109a40cf966b557d33af92b0?format=webp&width=2000" alt="" className="rounded-2xl w-full h-auto object-cover" />
                </div>
            </div>
            {/* Contact support component */}
            <div className="w-full flex justify-center py-16 px-0  md:px-10 lg:px-30 ">
                <div className="w-[90%]  bg-white border border-blue-200 rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-6 p-12 md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-black">
                                Contact Us
                            </h1>

                            <p className="text-gray-700 text-lg">
                                Want to see what real-time decision intelligence can do for your app
                                and bottom line? Contact sales or sign up free to start building
                                with PubNub today.
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
                                    Get Started
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
        </div>
    )
}

export default ApplicationService
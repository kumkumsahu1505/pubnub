import React from 'react'
import image1 from '../assets/office-workplace-with-laptop-smartphone.jpg'
import { Link } from 'react-router-dom'
import ChatCard from './ChatCard'
import ScaleChatCard from '../component/ScaleChatCard'
import WhyPubnub from './WhyPubnub'
import OptionalControl from './OptionalControl'

function ChatSupportComponent() {
  return (
      <div className="bg-[#031143] text-white w-full py-20 mx-auto">

         <div className="text-center max-w-3xl mx-auto text-white pt-10 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Accelerate Time to Market With Uncompromising Scale and Control
                </h2>
                <p className="text-white text-lg max-w-lg mx-auto">
                   PubNub gives your team the tools to launch high-performance chat rapidly, manage complexity as you grow, and eliminate the infrastructure overhead.
                </p>

                 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
                                <Link
                                    to="/contactForm"
                                    className="bg-blue-950  shadow-xl shadow-blue-700 text-white md:px-6 py-3 rounded-md text-center"
                                >
                                    Start Building
                                </Link>

                                <Link
                                    to="/login"
                                    className="border bg-white border-gray-300 px-6 py-3 rounded-md text-center text-black"
                                >
                                    Contact Sales
                                </Link>
                            </div>
            </div>

            <ChatCard/>
            <OptionalControl/>
            <ScaleChatCard/>
            <WhyPubnub/>
            {/* Contact support  */}
             <div className="w-full flex justify-center py-16 px-0 md:px-10 lg:px-30 ">
                <div className="w-[90%]  bg-blue-950 border border-blue-200 rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-6 p-12 md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold ">
                               Speak to an Expert
                            </h1>

                            <p className=" text-lg">
                              Whether you build apps for digital healthcare, fintech, ecommerce, or the gaming industry, now’s the time to enhance your user experience with real-time chat. Connect with our experts to learn how you can build secure, scalable, and interactive chat experiences.
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

export default ChatSupportComponent
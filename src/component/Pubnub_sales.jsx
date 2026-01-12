import React from 'react'
import image1 from '../assets/e-commerce.9cb85a81.png'
import image2 from '../assets/healthcare.983824c0.png'
import image3 from '../assets/live-events.da89afc2.png'
import image4 from '../assets/emoji.44776ab0.png'
import { Link } from "react-router-dom";
function Pubnub_sales() {
    return (
        <>
            <div className='bg-[#001143] h-screen w-auto flex justify-around py-30'>
                <div className="w-[50%]  flex flex-col gap-12 ">
                    <h1 className="text-white font-bold text-6xl">
                        The market leading platform for real-time interactive apps
                    </h1>

                    <h3 className="text-white font-light text-md">
                        The PubNub promise: real-time innovation. Efficiently and effectively build,
                        manage, and monetize engaging apps that captivate and delight users.
                    </h3>

                    <div className="flex gap-5">
                        <Link to='/register'>
                        <button className="text-white px-10 py-5 border border-blue-400 rounded-lg bg-blue-950 shadow-xl shadow-blue-900">
                            Start Building
                        </button>
                        </Link>
                        
                    <Link to="/contactForm">
                    <button className="bg-white px-10 py-5 text-black rounded-lg">
                            Contact Sales
                        </button></Link>
                     
                    </div>
                </div>

                <div className="relative h-96 w-96">
                    {/* Back card */}
                    <img
                        src={image1}
                        alt=""
                        className="absolute top-10 left-30 w-60 z-10 opacity-100"
                    />

                    {/* Middle card */}
                    <img
                        src={image2}
                        alt=""
                        className="absolute top-20 -left-8 w-70 z-100 opacity-70 shadow-2xl shadow-blue-500"
                    />

                    {/* Front card */}
                    <img
                        src={image3}
                        alt=""
                        className="absolute top-50 left-16 w-60 z-100"
                    />
                     <img
                        src={image4}
                        alt=""
                        className="absolute top-70 left-70 w-20 z-100"
                    />
                </div>

            </div>
        </>
    )
}

export default Pubnub_sales
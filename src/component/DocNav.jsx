import React from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom'
import { Search } from "lucide-react";

function DocNav() {
  return (
    <>
        <div className='static flex justify-between px-10 py-5 items-center text-lg'>
        <div className='flex justify-between gap-10 list-none items-center'>
            <img src={logo} alt="logo image" className='h-8 w-auto' />
            <li >DOCS</li>
        </div>
        <div className='flex justify-between items-center gap-10 list-none '>
            <li>Support</li>
            <li>Contact sales</li>
            <Link to='/login'><button className='rounded-lg py-2 px-4 border-2 border-gray-500 '>Login</button></Link> 
            <Link to='register'><button className='rounded-lg px-4 py-2 border-2 bg-black text-white'>Try Out APIs</button></Link>   
        </div>
    
   </div>

  <div
      className="w-full h-[450px] flex items-center justify-center bg-cover bg-center relative bg-blue-950"  >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          PubNub Documentation
        </h1>

        <p className="text-gray-200 text-lg mb-8">
          How can we help you with building real-time solutions?
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center bg-white rounded-lg px-4 py-3 w-[300px] md:w-[420px]">
            <Search className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search the docs..."
              className="outline-none w-full text-gray-700"
            />
          </div>

          <button className="bg-teal-200 text-black px-5 py-3 rounded-lg font-medium hover:bg-teal-300 transition">
            ✨ Ask AI
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DocNav
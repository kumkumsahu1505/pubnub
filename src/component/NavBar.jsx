import React from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 md:gap-2 bg-white flex justify-between px-4 md:px-6 py-5 items-center text-md">

    
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to="/">
          <img src={logo} alt="logo image" className="h-8 w-auto object-contain" />
        </Link>


        <ul className="hidden md:flex gap-6 list-none items-center">
          <Link to="/coreService"><li>Platform</li></Link>
          <Link to='/chatSupport'><li>Solutions</li></Link>
          <Link to='/pricing'><li>Pricing</li></Link>
          <Link to="/developerHome"><li>Developer</li></Link>
          <Link to='/resource'><li>Resources</li></Link>  
        </ul>
      </div>

      <div className="hidden md:flex gap-4">
        <Link to="/contactForm">
          <button className="bg-red-900 rounded-lg px-6 py-2 md:text-sm md:px-2  text-white">
            Contact sales
          </button>
        </Link>

        <Link to="/register">
          <button className="rounded-lg px-4 py-2 border-2 border-gray-500 md:text-sm md:px-2">
            Try for Fress
          </button>
        </Link>

        <Link to="/login">
          <button className="rounded-lg px-4 py-2 border-2 border-gray-500 md:text-sm md:px-2">
            Login
          </button>
        </Link>
      </div>

      <div className="md:hidden cursor-pointer">
        <Menu size={28} />
      </div>

    </div>
  )
}

export default NavBar

import React, { useState } from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between px-4 md:px-6 py-5 items-center text-md">

        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <Link to="/coreService"><li>Platform</li></Link>
            <Link to="/chatSupport"><li>Solutions</li></Link>
            <Link to="/pricing"><li>Pricing</li></Link>
            <Link to="/developerHome"><li>Developer</li></Link>
            <Link to="/resource"><li>Resources</li></Link>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/contactForm">
            <button className="bg-red-900 text-white px-6 py-2 rounded-lg">
              Contact sales
            </button>
          </Link>

          <Link to="/register">
            <button className="border-2 px-4 py-2 rounded-lg">
              Try for Free
            </button>
          </Link>

          <Link to="/login">
            <button className="border-2 px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-white shadow-lg z-40 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            <Link to="/coreService" onClick={() => setIsOpen(false)}>Platform</Link>
            <Link to="/chatSupport" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/developerHome" onClick={() => setIsOpen(false)}>Developer</Link>
            <Link to="/resource" onClick={() => setIsOpen(false)}>Resources</Link>

            <hr />

            <Link to="/contactForm">
              <button className="w-full bg-red-900 text-white py-2 rounded-lg">
                Contact sales
              </button>
            </Link>

            <Link to="/register">
              <button className="w-full border-2 py-2 rounded-lg">
                Try for Free
              </button>
            </Link>

            <Link to="/login">
              <button className="w-full border-2 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default NavBar

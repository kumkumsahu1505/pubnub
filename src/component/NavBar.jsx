import React from 'react'
import logo from '../assets/pubnub_logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
   <div className='static flex justify-between px-20 py-10 items-center text-md'>
        <div className='flex justify-between gap-10 list-none items-center'>
            <img src={logo} alt="logo image" className='h-8 w-auto' />
            <li>Platform</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Developer</li>
            <li>Resources</li>
        </div>
        <div className='flex justify-between gap-10'>
           <Link to='/contactForm'>
            <button className='bg-red-900 rounded-lg p-2  px-6 text-white'>Contact sales</button>
            </Link>
            <Link to='register'><button className='rounded-lg p-2 border-2 border-gray-500'>Try for Fress</button></Link>
            <Link to='/login'><button className='rounded-lg p-2 border-2 border-gray-500 '>Login</button></Link> 
        </div>
    
   </div>

  )
}

export default NavBar
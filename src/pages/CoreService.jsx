import React from 'react'
import NavBar from '../component/NavBar'
import CoreServiceComponent from '../component/CoreServiceComponent'
import ApplicationService from '../component/ApplicationService'
import Footer from '../component/Footer'
function CoreService() {
  return (
    <div className='overflow-hidden'>
     <NavBar/>
     <CoreServiceComponent/>
     <ApplicationService/>
     <Footer/>
    </div>
  )
}

export default CoreService
import React from 'react'
import NavBar from '../component/NavBar'
import Pubnub_sales from '../component/Pubnub_sales'
import Brand from '../component/Brand'
import Experience from '../component/Experience'
import Expert from '../component/Expert'
import Footer from '../component/Footer'
function Home() {
  return (
    <>
      <NavBar/>
      <Pubnub_sales/>
      <Brand/>
      <Experience/>
      <Expert/>
      <Footer/>
    </>
  )
}

export default Home
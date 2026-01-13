import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ChatSupportComponent from '../component/ChatSupportComponent'


function ChatPage() {
  return (
    <div className='overflow-hidden'>
        <NavBar/>
        <ChatSupportComponent/>
        <Footer/>
    </div>
  )
}

export default ChatPage
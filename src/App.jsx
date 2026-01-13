import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import ContactForm from '../src/pages/ContactControlForm';
import Discover from './component/Discover';
import Register from './pages/Register';
import Login from './pages/Login';
import Docs from './pages/Docs';
import CoreService from '../src/pages/CoreService';
import ChatPage from './pages/ChatPage';
import DeveloperHome from './pages/DeveloperHome';
import Resource from './pages/Resource';
import Pricing from './pages/Pricing';

function App() {
  return (
   <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/contactForm' element={<ContactForm/>}/>
              <Route path='/discover' element={<Discover/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/doc' element={<Docs/>}/>
              <Route path='/coreService' element={<CoreService/>}/>
              <Route path='/chatSupport' element={<ChatPage/>}/>
              <Route path='/developerHome' element={<DeveloperHome/>}/>
              <Route path="/resource" element={<Resource/>}></Route>
              <Route path='/pricing' element={<Pricing/>}></Route>
          </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
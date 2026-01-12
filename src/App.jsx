import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import ContactForm from '../src/pages/ContactControlForm';
import Discover from './component/Discover';
import Register from './pages/Register';
import Login from './pages/Login';
import Docs from './pages/Docs';

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
          </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
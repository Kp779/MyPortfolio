import { useState } from 'react'
import './App.css'
import Portfolio from './components/Herosection.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Herosection from './components/Herosection.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
function App() {

  <Routes>
    <Route path='/' element={<Herosection />} />
    <Route path='/about' element={<About />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
  
  return (
    <>
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    </>
  )
}

export default App

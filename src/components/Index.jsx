import React from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import Avatar from '../assets/avatar1.png'
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Index = () => {


  return (
    <div id='main-page' className=' bg-[#111111] h-auto max-h-full w-full max-w-full flex items-stretch p-8 box-border  '>
      {/* Left Section */}
      <div className="left-section h-fit flex-shrink-0 flex-grow-0 w-1/4 m-2 p-4 bg-[#1e1e1e] flex flex-col items-center rounded-lg">
        {/* Intro Section */}
        <div id='intro-section' className='flex flex-col items-center'>
          <div className='p-2 md:p-4 m-2 bg-[#383838] rounded-md'>
            <img src={Avatar} alt="avatar" style={{ height: '9rem', width: '6.4rem' }} />
          </div>
          <div className='flex flex-col items-center' >
            <p className='text-[#b1b1b1] font-montserrat font-medium text-xl text-center'>Kompal Poorkar</p>
            <p className='text-[#b1b1b1] bg-[#2c2c2c] w-max px-4 py-1 m-1 rounded-md font-montserrat font-medium text-sm'>Web Developer</p>
          </div>
        </div>
        <div className='w-44 h-[1px] my-6 bg-slate-300 '></div>
        {/* Detail Section */}
        <div id='detail-section' className='flex flex-col gap-4  text-[#b1b1b1] font-montserrat'>
          <div id='section' className='flex items-center gap-2'>
            <div>
              <MdOutlineMail className='h-10 w-10 p-2 m-1 border-[#b1b1b1] text-[#faea5a] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'> Email</p>
              <p className='text-xs font-normal'>poorkarkompal22@gmail.com</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'>
            <div>
              <FaMobileAlt className='h-10 w-10 p-2 m-1 border-[#b1b1b1] text-[#faea5a] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'>Phone</p>
              <p className='text-xs font-normal'>+91-9752988118</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'>
            <div>
              <IoLocationOutline className='h-10 w-10 p-2 m-1 text-[#faea5a] border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'>Location</p>
              <p className='text-xs font-normal'>Chennai, India</p>
            </div>
          </div>
          <div className='flex justify-center gap-3 text-xl'>
            <a href="https://x.com/Kompal5972" target="_blank" rel="noopener noreferrer" className='hover:text-[#faea5a]'>
              <FaXTwitter />
            </a>
            <a href="https://github.com/Kp779" target="_blank" rel="noopener noreferrer" className='hover:text-[#faea5a]'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kompal-poorkar-2710231bb/" target="_blank" rel="noopener noreferrer" className='hover:text-[#faea5a]'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div id='right-section' className="w-3/4 m-2 flex-shrink-1 flex-grow-1 p-0 max-h-[34rem] bg-[#1e1e1e] overflow-y-scroll no-scrollbar flex  rounded-lg relative font-montserrat">
        {/* Navbar */}
        <div id='navbar' className='rounded-bl-lg rounded-tr-lg m-0 p-0 absolute right-0 bg-[#2c2c2c]'>
          <ul className='flex flex-row gap-8 justify-end text-[#b1b1b1] font-medium p-2 text-xs px-8 py-4'>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'text-[#f7e869]' : 'hover:text-[#faea5a]'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => isActive ? 'text-[#faea5a]' : 'hover:text-[#faea5a]'}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? 'text-[#faea5a]' : 'hover:text-[#faea5a]'}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'text-[#faea5a]' : 'hover:text-[#faea5a]'}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        {/* Route will render the different page components in this section */}
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;

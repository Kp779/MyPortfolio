import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
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
    <div id='main-page' className='bg-[#111111] h-full max-w-full flex p-8 box-border  '>
      {/* Left Section */}
      <div className="left-section w-1/4 m-2 p-4 h-full bg-[#1e1e1e] flex flex-col items-center rounded-lg">
        {/* Intro Section */}
        <div id='intro-section' className='flex flex-col items-center'>
          <div className='p-2 md:p-4 m-2 bg-[#383838] rounded-md'>
            <img src={Avatar} alt="avatar" style={{height:'9rem' , width:'6.4rem'}}/>
          </div>
          <div className='flex flex-col items-center' >
            <p className='text-[#b1b1b1] font-montserrat font-medium text-xl text-center'>Kompal Poorkar</p>
            <p className='text-[#b1b1b1] bg-[#383838] w-max px-4 py-1 m-1 rounded-md font-montserrat font-medium text-sm'>Web Developer</p>
          </div>
        </div>
        <div className='w-44 h-[1px] my-6 bg-slate-300 '></div>
        {/* Detail Section */}
        <div id='detail-section' className='flex flex-col gap-4 text-[#b1b1b1] font-montserrat'>
          <div id='section' className='flex items-center gap-2'>
            <div>
            <MdOutlineMail className='h-10 w-10 p-2 m-1 border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }}/>
            </div>
            <div>
              <p className='text-sm font-light'> Email</p>
              <p className='text-xs font-normal'>poorkarkompal22@gmail.com</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'> 
            <div>
            <FaMobileAlt className='h-10 w-10 p-2 m-1 border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'>Phone</p>
              <p className='text-xs font-normal'>+91-9752988118</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'> 
            <div>
            <FaMobileAlt className='h-10 w-10 p-2 m-1 border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'>Phone</p>
              <p className='text-xs font-normal'>+91-9752988118</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'> 
            <div>
            <FaMobileAlt className='h-10 w-10 p-2 m-1 border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }} />
            </div>
            <div>
              <p className='text-sm font-light'>Phone</p>
              <p className='text-xs font-normal'>+91-9752988118</p>
            </div>
          </div>
          <div id='section' className='flex items-center gap-2'>
            <div>
            <IoLocationOutline className='h-10 w-10 p-2 m-1 border-[#b1b1b1] border-opacity-20 bg-[#1e1e1ef1] rounded-md' style={{ borderWidth: '0.1px' }}/>
            </div>
            <div>
              <p className='text-sm font-light'>Location</p>
              <p className='text-xs font-normal'>Chennai, India</p>
            </div>
          </div>
          <div className='flex justify-center gap-3'>
            <FaXTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div id='right-section' className="w-3/4 m-2 p-0 bg-[#1e1e1e] overflow-y-scroll custom-scrollbar h-full rounded-lg relative">
        {/* Navbar */}
        <div id='navbar' className='rounded-lg m-0 p-0 relative'>
          <ul className='flex flex-row gap-5 justify-end text-yellow-100 p-2 rounded-lg'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Route will render the different page components in this section */}
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;

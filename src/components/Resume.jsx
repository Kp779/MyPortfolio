import React from 'react'
import { LuDownload } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LiaGitAlt } from "react-icons/lia";
import { FaFigma } from "react-icons/fa";
import education from "../data/education.json"
import expirience from "../data/expirience.json";
import extras from "../data/extras.json"

const Resume = () => {
  function handleDownload() {
    const link = document.createElement('a');
    link.href = 'public/resume/Kompal Poorkar - frontend dev.pdf';
    link.download = 'Kompal-Poorkar.pdf';
    link.click();
  }

  return (
    <div className='font-montserrat w-full'>
      <div className='text-white px-6 pt-4 font-semibold text-3xl  flex gap-4'>
        Resume
        <div className="relative group inline-block">
          <LuDownload
            className="hover:text-[#b1b1b1] text-[#faea5a] hover:cursor-pointer"
            onClick={handleDownload}
          />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#2c2c2c] text-white text-xs font-thin rounded-lg px-2 py-1 shadow-lg">
            Download
          </div>
        </div>
      </div>
      <p className='bg-gradient-to-r from-white via-[#faea5a] to-[#242321] w-16 h-[0.3rem] mx-6 my-3 rounded-lg' />
      <div className='flex'>
        <div id='Major-Block' className='w-4/6'>
          <div id='content-section'>
            <div id='title' className='flex text-white items-center gap-5 my-6 mx-6'>
              <IoBookOutline className='w-9 h-9 p-2 rounded-lg bg-[#383838]' />
              <p className='text-lg'>Work Expirience</p>
            </div>
            <div className='flex flex-col-reverse'>
              {expirience.map((ex) => {
                return(
                <div className='flex items-start mx-10 border-l-2 '>
                  <div className='w-4 h-4 rounded-full bg-emerald-50 relative' style={{ left: '-0.5rem' }}>
                  </div>
                  <div key={ex.id} className="mb-4 ml-6 px-6">
                    <p className="text-lg text-[#faea5a] font-semibold">{ex.role}</p>
                    <p className="text-white font-medium">{ex.company}</p>
                    <p className="text-gray-400 text-sm">{ex.duration}</p>
                  </div>
                </div>)
              })}
            </div>

          </div>
          <div id='content-section'>
            <div id='title' className='flex text-white items-center gap-5 my-6 mx-6'>
              <IoBookOutline className='w-9 h-9 p-2 rounded-lg bg-[#383838]' />
              <p className='text-lg'>Education</p>
            </div>
            <div className='flex flex-col-reverse'>
              {education.map((ex) => (
                <div className='flex items-start mx-10 border-l-2 '>
                  <div className='w-4 h-4 rounded-full bg-emerald-50 relative' style={{ left: '-0.5rem' }}>
                  </div>
                  <div key={ex.id} className="mb-4 ml-6 px-6">
                    <p className="text-lg text-[#faea5a] font-semibold">{ex.institute}</p>
                    <p className="text-white font-medium">{ex.grade}</p>
                    <p className="text-gray-400 text-sm">{ex.score}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div id='content-section'>
            <div id='title' className='flex text-white items-center gap-5 my-6 mx-6'>
              <IoBookOutline className='w-9 h-9 p-2 rounded-lg bg-[#383838]' />
              <p className='text-lg'>Extras</p>
            </div>
            <div className='flex flex-col-reverse'>
              {extras.map((ex) => (
                <div className='flex items-start mx-10 border-l-2 mb-4 '>
                  <div className='w-4 h-4 rounded-full bg-emerald-50 relative' style={{ left: '-0.5rem' }}>
                  </div>
                  <div key={ex.id} className="mb-4 ml-6 px-6">
                    <p className="text-lg text-[#faea5a] font-semibold">{ex.title}</p>
                    <p className="text-white font-medium">{ex.when}</p>
                    <p className="text-gray-400 text-sm">{ex.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div id='skill-block' className='w-2/6'>
          <p className='py-2 my-4 text-lg text-[#faea5a] mx-2'>Technologies</p>
          <div className='flex flex-wrap mr-4 text-[#b1b1b1]'>
            <FaHtml5 className='h-10 w-10 m-2' />
            <FaCss3Alt className='h-10 w-10 m-2' />
            <IoLogoJavascript className='h-10 w-10 m-2'/>
            <FaReact className='h-10 w-10 m-2' />
            <SiRedux className='h-10 w-10 m-2'/>
            <FaBootstrap className='h-10 w-10 m-2'/>
            <RiTailwindCssFill className='h-10 w-10 m-2'/>
            <FaNodeJs className='h-10 w-10 m-2'/>
            <BiLogoMongodb className='h-10 w-10 m-2'/>
            <SiPostman className='h-10 w-10 m-2'/>
            <FaGithub className='h-10 w-10 m-2'/>
            <LiaGitAlt className='h-10 w-10 m-2'/>
            <FaFigma className='h-10 w-10 m-2'/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Resume

  import React from 'react'
  import { useState } from 'react';
  import cards from '../constants/testimonials'
  import men from '../assets/men-testimonial.png';
  import women from '../assets/women-testimonial.png';

  const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 2;
    const totalCards = cards.length;
    const maxIndex = totalCards - cardsToShow;

    // const slideCarousel = (direction) => {
    //   setCurrentIndex((prevIndex) => {
    //     let newIndex = prevIndex + direction;
    //     if (newIndex < 0) newIndex = 0;
    //     if (newIndex > maxIndex) newIndex = maxIndex;
    //     return newIndex;
    //   });
    // };
    const slideCarousel = (index) => {
      setCurrentIndex(index);
    };
    return (
      <div className='overflow-y-scroll no-scrollbar font-montserrat'>
        <p className='text-white px-6 pt-4 font-semibold text-3xl '>About Me</p>
        <p className='bg-gradient-to-r from-white via-[#faea5a] to-[#242321] w-16 h-[0.3rem] mx-6 my-3 rounded-lg'></p>
        <div id='details' className='m-8 flex flex-col gap-5 text-[#b1b1b1] font-thin text-sm text-justify'>
          <p>Hi, I am Kompal Poorkar, a passionate Frontend Developer based in Chennai, India. I graduated with the Class of 2024. During the past year, I've gained hands-on experience building dynamic websites and enhancing user interfaces for better engagement. I'm passionate about writing clean, maintainable code.</p>
          <p>When I'm not coding, you can find me exploring the latest trends in web development, working on personal projects, or exploring about open source projects and contributions</p>
          <p>I'm currently seeking new opportunities to apply my skills and contribute to exciting projects while continuing to grow as a developer.</p>
        </div>
        {/* <div>
          What I am doing
        </div> */}
      <div className="relative w-full max-w-4xl mx-auto mt-8">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden relative">
          {/* Carousel Items */}
          <p className='px-3 pb-4 text-xl font-medium text-white'>Testimonials</p>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
            }}
          >
            {cards.map((card) => (
              <div key={card.id} className="min-w-[30vw] p-2 mx-2 my-4 bg-[#1e1e1e]">
                <div className='ml-4  h-16 box-border absolute top-[0rem]  flex items-end gap-3'>
                  <img src={card.gender==='men'?men:women} alt="" className='p-[0.4rem] w-16 h-16 border border-[#b1b1b1] border-opacity-20 rounded-lg bg-[#1e1e1ec2] ' />
                  <h2 className="text-xl font-medium mb-1 min-w-[15vw] text-white">{card.title}</h2>
                </div>
                <div className="bg-[#2c2c2c6e] shadow-lg rounded-lg p-6 h-36 flex items-center justify-start font-thin text-gray-400   text-xs">
                  <p >{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Bar */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => slideCarousel(-1)}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            ←
          </button>
          <button
            onClick={() => slideCarousel(1)}
            disabled={currentIndex === maxIndex}
            className={`p-2 rounded-full ${currentIndex === maxIndex ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            →
          </button>
        </div> */}
        <div className="mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 text">
            <div className="flex justify-center mb-6">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <div
                  key={index}
                  onClick={() => slideCarousel(index)}
                  className={`w-8 h-2 mx-1  cursor-pointer ${currentIndex === index ? 'bg-[#faea5a]' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
      </div>
      </div>
    )
  }

  export default About
  0
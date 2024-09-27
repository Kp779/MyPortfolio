import React from 'react';

const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="font-montserrat min-h-screen w-full  text-white">
      <p className="text-white px-6 pt-4 font-semibold text-3xl">Contact</p>
      <p className="bg-gradient-to-r from-white via-[#faea5a] to-[#242321] w-16 h-[0.3rem] mx-6 my-3 rounded-lg"></p>

      <div id="details" className="px-6">
        <p className="text-lg mx-2 mt-6 ">Feel free to reach out to me via the form below:</p>
        
        {/* Contact Form */}
        <div>
          
        </div>
        <form className=" py-6 px-2 rounded-md max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your name"
              autocomplete='off'
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your email"
              autocomplete='off'
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your message"
              rows="4"
              autocomplete='off'
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#faea5a] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#d4c74b] 
            transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

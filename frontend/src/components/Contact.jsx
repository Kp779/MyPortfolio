import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // State to display success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendURL}/send-email`, formData);
      if (response.status === 200) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(()=>{
          setStatus('');
        },5000)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="font-montserrat w-full text-white flex mid:justify-center very-sm:items-start flex-col">
      <p className="text-white very-sm:px-3 xtra-sm:px-6 pt-4 font-semibold very-sm:text-xl xtra-sm:text-3xl">Contact</p>
      <p className="bg-gradient-to-r from-white via-[#faea5a] to-[#242321] w-16 h-[0.3rem] very-sm:mx-3 xtra-sm:mx-6 my-3 rounded-lg"></p>

      <div id="details" className="very-sm:px-3 xtra-sm:px-6">
        <p className="text-lg mx-2 mt-5">Feel free to reach out to me via the form below:</p>

        <form className="py-6 px-2 rounded-md max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your name"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your email"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-[#faea5a]"
              placeholder="Your message"
              rows="4"
              autoComplete="off"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#faea5a] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#d4c74b] transition"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-sm">{status}</p>} {/* Display status message */}
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react'
import { Link } from 'react-router-dom'
const Herosection = () => {
  return (
    <div>
      main page
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Herosection

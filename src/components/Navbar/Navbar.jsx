import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div  className='navbar'>
        <h1>Claire Muiru</h1>
      <ul className="navbar-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-right">
            <button>Hire me</button>
        </div>
    </div>
  )
}

export default Navbar

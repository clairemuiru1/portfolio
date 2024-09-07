import React, { useState } from 'react';
import "./navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='navbar'>
      <h1>Claire Muiru</h1>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-right">
        <button>Hire me</button>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;

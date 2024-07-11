import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
      <div className="nav-logo">MyApp</div>
      <div className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

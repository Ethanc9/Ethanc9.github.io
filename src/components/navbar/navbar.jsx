import React from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <div className="navbar-text">
          <Link to="/about">About</Link>
          <div className="resume">
              <a href="https://drive.google.com/file/d/1qV8VWKUGHGe_jFmHnvlp0NwS4pfef8EO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="icons-container">
          <Logo 
            logo="LinkedIn"
            size="50"
            color="#000080" 
          />
          <Logo 
            logo="Github"
            size="50"
            color="#000080" 
          />
        </div>
      </div>
    </header>
  );
}

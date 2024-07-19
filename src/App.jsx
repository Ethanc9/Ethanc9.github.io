import React from 'react';
import "./styles.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Logo({ logo, size, color }) {
  const iconSize = size.endsWith('%') ? window.innerWidth * (parseInt(size) / 100) : size;
  
  const handleClick = () => {
    switch (logo) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/ethan-canton9/');
        break;
      case 'Github':
        window.open('https://github.com/Ethanc9');
        break;
      case 'Mail':
        console.log("Mail logo clicked");
        break;
      default:
        console.log("Unknown logo clicked");
    }
  };

  const renderIcon = () => {
    const icon = () => {
      switch (logo) {
        case 'LinkedIn':
          return <FaLinkedin size={iconSize} color={color} />;
        case 'Github':
          return <FaGithub size={iconSize} color={color} />;
        case 'Mail':
          return <IoIosMail size={iconSize} color={color} />;
        default:
          return null;
      }
    };

    return (
      <button onClick={handleClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        {icon()}
      </button>
    );
  };

  return (
    <div className="logo" aria-label={logo}>
      {renderIcon()}
    </div>
  );
}

export default function App() {
  return (
    <section>
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
      <Logo 
        logo="Mail"
        size="50"
        color="#000080" 
      />
    </section>
  );
}
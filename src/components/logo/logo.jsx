import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Logo({ logo, size, color }) {
  const iconSize = size.endsWith('%') ? window.innerWidth * (parseInt(size, 10) / 100) : size;
  
  const handleClick = () => {
    let url;
    switch (logo) {
      case 'LinkedIn':
        url = 'https://www.linkedin.com/in/ethan-canton9/';
        break;
      case 'Github':
        url = 'https://github.com/Ethanc9';
        break;
      default:
        console.log("Unknown logo clicked");
        return; 
    }

    // Attempt to open the URL in a new window
    const newWindow = window.open(url, '_blank');

    // Check if the new window was successfully opened
    if (!newWindow) {
      alert("It looks like your browser is blocking pop-ups. Please disable your pop-up blocker and try again.");
    } else {
      newWindow.focus();
    }
  };


  const renderIcon = () => {
    const icon = () => {
      switch (logo) {
        case 'LinkedIn':
          return <FaLinkedin size={iconSize} color={color} />;
        case 'Github':
          return <FaGithub size={iconSize} color={color} />;
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

export default Logo;

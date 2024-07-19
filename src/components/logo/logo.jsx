import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Logo({ logo, size, color }) {
  const iconSize = size.endsWith('%') ? window.innerWidth * (parseInt(size, 10) / 100) : size;
  
  const handleClick = () => {
    switch (logo) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/ethan-canton9/');
        break;
      case 'Github':
        window.open('https://github.com/Ethanc9');
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
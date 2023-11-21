import React, { useState } from 'react';
import '../App.css'

const CardFlag = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`card ${isHovered ? 'enlarged' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img
        src="https://flagcdn.com/w320/ca.png" // URL de la bandera de Canadá
        alt="Canadian Flag"
        className="flag"
      />
      <h2 className="country-name">Canada</h2>
    </div>
  );
};

export default CardFlag;

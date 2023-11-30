import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../App.css';

const CardFlag = ({ flagSrc, countryName, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(countryName); // Llama a la función onClick pasando el nombre del país
    }
  };

  return (
    <Container
      fluid
      className={`card-flag ${isHovered ? 'enlarged' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={handleCardClick} // Agrega la función de clic al contenedor
    >
      <div className="image-container">
        <Image
          src={flagSrc}
          alt={`${countryName} Flag`}
          className="flag"
          thumbnail
        />
      </div>
      <h4>{countryName}</h4>
    </Container>
  );
};

export default CardFlag;

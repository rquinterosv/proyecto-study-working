import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../App.css';

const CardFlag = ({ flagSrc, countryName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Container
      fluid
      className={`card-flag ${isHovered ? 'enlarged' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
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

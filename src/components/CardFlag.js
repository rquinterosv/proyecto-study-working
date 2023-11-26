import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import '../App.css';

const CardFlag = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Card
      className={`card ${isHovered ? 'enlarged' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Card.Body>
        <div className="d-flex">
          <div className="mr-3">
            <Image
              src="https://flagcdn.com/w320/ca.png" // URL de la bandera de Canadá
              alt="Canadian Flag"
              className="flag"
              thumbnail
            />
          </div>
          <div>
            <Card.Title>Canada</Card.Title>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardFlag;

import React, { useState } from 'react';
import '../App.css';

// Components
import HeroSection from '../components/HeroSection';
import GeneralService from '../components/GeneralService';
import CardFlag from '../components/CardFlag';
import Service1 from '../components/Service1';
import Service2 from '../components/Service2';
import Service3 from '../components/Service3';
import Footer from '../components/Footer';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCardClick = (countryName) => {
    console.log('Clicked Country:', countryName); // Verificar si se hace clic en la tarjeta

    if (countryName === 'Canada') {
      setSelectedCountry('Canada');
      console.log('Selected Country:', selectedCountry); // Verificar el valor de selectedCountry
    } else if (countryName === 'Europa') {
      setSelectedCountry('Europe');
      console.log('Selected Country:', selectedCountry); // Verificar el valor de selectedCountry
    }
    // Agrega más casos según sea necesario para otros países
  };

  return (
    <>
      <HeroSection />
      <Container>
        <GeneralService />
      </Container>

      <Container fluid>
        <Row className="card-flag-container justify-content-center text-center">
          <Col xs={12} md={6} lg={3}>
          <CardFlag
            flagSrc="https://flagcdn.com/w320/ca.png"
            countryName="Canada"
            onClick={handleCardClick} // Pasar la función handleCardClick
          />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CardFlag
              flagSrc="https://flagcdn.com/w320/eu.png"
              countryName="Europa"
              onClick={() => handleCardClick('Europa')} // Manejar clic en la tarjeta de Europa
            />
          </Col>
          {/* Agrega más tarjetas según sea necesario */}
        </Row>
      </Container>

      {/* Mostrar contenido específico según la tarjeta seleccionada */}
      {selectedCountry === 'Canada' && <Service2 selectedCountry={selectedCountry} />}
      {selectedCountry === 'Europe' && <div>Contenido específico para Europa</div>}
      {/* Agrega más condiciones para otros países si es necesario */}
      <Footer />
    </>
  );
}

export default Home;

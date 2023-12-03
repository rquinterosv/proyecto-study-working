import React, { useState, useEffect } from 'react';
import '../App.css';

// Components
import HeroSection from '../components/HeroSection';
import GeneralService from '../components/GeneralService';
import CardFlag from '../components/CardFlag';
import Service1 from '../components/Service1';
import Footer from '../components/Footer';

// Bootstrap
import { Container, Row, Col} from 'react-bootstrap';


function Home() {
  const [selectedCountry, setSelectedCountry] = useState('Canada');

  useEffect(() => {
    setSelectedCountry('Canada');
  }, []);

  const handleCardClick = (countryName) => {
    console.log('Clicked Country:', countryName); // Verificar si se hace clic en la tarjeta

    if (countryName === 'Canada') {
      setSelectedCountry('Canada');
      console.log('Selected Country:', selectedCountry);
    } else if (countryName === 'Europa') {
      setSelectedCountry('Europe');
      console.log('Selected Country:', selectedCountry);
    }
  };

  return (
    <>
      <HeroSection />
      <Container id="services">
        <GeneralService />
      </Container>

      <Container fluid>
        <h3 className='text-center p-2'>¿Donde quieres viajar?</h3>
        <Row className="card-flag-container justify-content-center text-center">
          <Col xs={12} md={6} lg={3}>
            <CardFlag
              flagSrc="https://flagcdn.com/w320/ca.png"
              countryName="Canada"
              isSelected={selectedCountry === 'Canada'} 
              onClick={handleCardClick}
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CardFlag
              flagSrc="https://flagcdn.com/w320/eu.png"
              countryName="Europa"
              isSelected={selectedCountry === 'Europe'}
              onClick={() => handleCardClick('Europa')}
            />
          </Col>
        </Row>
      </Container>

      {selectedCountry === 'Canada' && <Service1 selectedCountry={selectedCountry} />}
      {selectedCountry === 'Europe' && <div>Contenido específico para Europa</div>}
      <Footer />
    </>
  );
}

export default Home;

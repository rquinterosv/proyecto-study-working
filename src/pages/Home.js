import React from 'react';
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
              countryName="Canadá"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CardFlag
              flagSrc="https://flagcdn.com/w320/eu.png"
              countryName="Europa"
            />
          </Col>
          {/* Agrega más tarjetas según sea necesario */}
        </Row>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <Service1 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Service2 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Service3 />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

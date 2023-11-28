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

      <Container>
        <Row className="card-flag-container">
          <Col><CardFlag /></Col>
          <Col><CardFlag /></Col>
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

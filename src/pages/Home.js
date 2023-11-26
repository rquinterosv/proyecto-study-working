import '../App.css';

// Components
import HeroSection from '../components/HeroSection';
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
      <div className="app-container">
        <div className="card-container d-flex justify-content-center">
          <div className="col-lg-6">
            <CardFlag />
          </div>
          <div className="col-lg-6">
            <CardFlag />
          </div>
        </div>
      </div>

      <Container fluid="md">
      <Row>
        <Col className='col-lg-12'><Service1 /></Col>
        <Col className='col-lg-12 mt-2'><Service2 /></Col>
        <Col className='col-lg-12 mt-2 mb-2'><Service3 /></Col>
      </Row>
    </Container>
      <Footer />
    </>
  );
}

export default Home;

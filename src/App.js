import './App.css';

// Components
import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import CardFlag from './components/CardFlag';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Footer from './components/Footer';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Menu />
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
        <Col><Service1 /></Col>
        <Col className='mt-2 mb-2'><Service2 /></Col>
      </Row>
    </Container>
      <Footer />
    </>
  );
}

export default App;

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img1 from '../img/img.jpg';

const Service1 = ({ selectedCountry }) => {
  const servicios = [
    'Servicio 1',
    'Servicio 2',
    'Servicio 3',
    'Servicio 4',
    // Agrega más servicios si es necesario
  ];

  return (
    <Container fluid className="custom-container-service">
      <Row className="align-items-center">
        <Col lg={6} className="order-lg-1">
          {/* Imagen en la izquierda para desktop */}
          <div className="d-none d-lg-block">
            <Image src={img1} fluid className="custom-image" />
          </div>

          {/* Imagen arriba para mobile */}
          <div className="d-block d-lg-none mb-3">
            <Image src={img1} fluid className="custom-image" />
          </div>
        </Col>

        {/* Contenido en la derecha */}
        <Col lg={6} className="order-lg-2">
          <div>
            {selectedCountry === 'Canada' && (
              <>
                <h2>Información para Canadá</h2>
                <p>Información específica para Canadá</p>
                {/* Agrega aquí el contenido específico para Canadá */}
                <h2>Cursos de Inglés Intensivos</h2>
                <p>Subtítulo</p>
                <ul>
                  {servicios.map((servicio, index) => (
                    <li key={index}>{servicio}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-end">
                  <Button variant="primary">Botón</Button>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service1;

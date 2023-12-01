import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img1 from '../img/Hero.png'; // Cambia estas URLs por las imágenes correspondientes

const Service1 = ({ selectedCountry }) => {
  const services = [
    {
      title: 'Card Title 1',
      subTitle: 'Subtitle 1',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, // Cambia la URL de la imagen para cada tarjeta
    },
    {
      title: 'Card Title 2',
      subTitle: 'Subtitle 2',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, // Cambia la URL de la imagen para cada tarjeta
    },
    {
      title: 'Card Title 3',
      subTitle: 'Subtitle 3',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, // Cambia la URL de la imagen para cada tarjeta
    },
    {
      title: 'Card Title 4',
      subTitle: 'Subtitle 4',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, // Cambia la URL de la imagen para cada tarjeta
    },
  ];

  return (
    <Container fluid className="custom-container-service">
      <Row className="align-items-center">
        {/* Contenido en la derecha */}
        <Col lg={12} className="order-lg-2">
          <div className="container">
            <Row className="justify-content-center">
              {selectedCountry === 'Canada' &&
                services.map((service, index) => (
                  <Col key={index} lg={3} md={12} className="mb-3">
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={service.image} /> {/* Utiliza la imagen correspondiente */}
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{service.subTitle}</Card.Subtitle>
                        <Card.Text>
                          <ul>
                            {service.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service1;



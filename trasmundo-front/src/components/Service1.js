import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../img/Hero.png';

const Service1 = ({ selectedCountry, servicesList }) => {
  const services = [
    {
      title: 'Visa de estudios',
      subTitle: 'Subtitle 1',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1,
      id: 'visa-estudios',
    },
    {
      title: 'Cursos de inglés',
      subTitle: 'Subtitle 2',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, 
      id: 'curso-ingles',
    },
    {
      title: 'Plan de vacaciones',
      subTitle: 'Subtitle 3',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1, 
      id: 'plan-vacaciones',
    },
    {
      title: 'Asesoría migratoria',
      subTitle: 'Subtitle 4',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      image: img1,
      id: 'asesoria',
    },
  ];

  return (
    <Container fluid className="custom-container-service">
      <Row className="align-items-center">
        <Col lg={12} className="order-lg-2">
          <div className="container">
            {selectedCountry === 'Canada' &&
              services.map((service, index) => (
                <Row id={service.id} key={index} className="align-items-center justify-content-center">
                  <Col key={index} lg={3} md={12} className="mb-3">
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={service.image} />
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
                        <Link to="/contact">
                          <Button variant="primary">Más información</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              ))}
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default Service1;
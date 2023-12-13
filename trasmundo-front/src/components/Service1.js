import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../img/Hero.png';

const Service1 = ({ selectedCountry, servicesList }) => {
  const services = [
    {
      title: 'Visa de estudios',
      subTitle: 'Nos comprometemos a brindarte asesoría integral y personalizada en cada etapa del camino hacia tu visa de estudio. Desde la selección del país y la institución educativa ideal hasta la preparación meticulosa de la documentación requerida, estamos aquí para ser tu guía confiable',
      points: ['Evaluación individualizada de tu perfil y metas educativas.', 'Asistencia en la preparación de documentos y formularios necesarios.', 'Asesoramiento sobre entrevistas consulares y procesos de solicitud', 'Apoyo continuo y respuestas a tus preguntas durante todo el proceso.'],
      image: img1,
      id: 'visa-estudios',
    },
    {
      title: 'Cursos de inglés',
      subTitle: 'Nuestro servicio de asesoría migratoria se enfoca en identificar y facilitar tu ingreso a prestigiosos colleges internacionales que permiten trabajar durante tus estudios. ',
      points: ['Asesoramiento detallado sobre las instituciones educativas que ofrecen programas que permiten trabajar durante tus estudios.', 'Apoyo en la preparación de la documentación requerida para la aplicación, incluyendo cartas de recomendación y ensayos.', 'Orientación paso a paso durante el proceso de solicitud para maximizar tus posibilidades de ingreso.', 'Asistencia en la preparación para entrevistas o cualquier otro requisito específico de admisión.'],
      image: img1, 
      id: 'curso-ingles',
    },
    {
      title: 'Plan de vacaciones',
      subTitle: 'Nuestro servicio se especializa en crear planes y paquetes de vacaciones a medida, diseñados para satisfacer tus deseos de explorar destinos fascinantes alrededor del mundo.',
      points: ['Personalización excepcional: creamos planes adaptados a tus preferencias, ya sea un escape relajante a playas paradisíacas, una aventura emocionante en destinos exóticos o una inmersión cultural en ciudades fascinantes.', 'Experiencia y conocimiento: contamos con expertos en destinos turísticos que te brindarán recomendaciones basadas en su experiencia y conocimiento para garantizar un viaje inolvidable.', 'Atención personalizada: estamos disponibles para atender tus consultas y necesidades en todo momento, asegurándonos de que tu viaje sea perfecto desde la planificación hasta el regreso a casa.', 'Calidad y comodidad: seleccionamos cuidadosamente proveedores de calidad para ofrecerte la mejor experiencia durante tus vacaciones.'],
      image: img1, 
      id: 'plan-vacaciones',
    },
    {
      title: 'Asesoría migratoria',
      subTitle: 'Entendemos que los procesos migratorios pueden ser complejos y abrumadores. Ya sea que estés buscando respuestas a preguntas generales sobre inmigración o necesites orientación detallada para trámites específicos, nuestro equipo de expertos está aquí para ser tu aliado confiable en cada paso del camino.',
      points: ['Consultas y asesoramiento personalizado: estamos disponibles para responder tus preguntas generales sobre inmigración o proporcionarte orientación detallada sobre procesos migratorios específicos, como la obtención de visas, residencia permanente, reunificación familiar, entre otros.', 'Evaluación de casos individuales: analizamos cuidadosamente tu situación migratoria y te proporcionamos información precisa y actualizada sobre los requisitos, plazos y procesos necesarios para alcanzar tus objetivos migratorios.', 'te guiamos en la preparación meticulosa de la documentación necesaria para tus trámites migratorios, asegurándonos de que esté completa y correctamente presentada.'],
      image: img1,
      id: 'asesoria',
    },
  ];

  return (
    <Container fluid className="custom-container-service">
      <Row className="align-items-stretch"> {/* Cambio de 'align-items-center' a 'align-items-stretch' */}
        {selectedCountry === 'Canada' &&
          services.map((service, index) => (
            <Col key={index} lg={3} md={6} className="mb-3">
              <div className="d-flex h-100"> {/* Agregando d-flex (display: flex) y h-100 (height: 100%) */}
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
              </div>
            </Col>
          ))}
      </Row>
    </Container>

  );
};

export default Service1;
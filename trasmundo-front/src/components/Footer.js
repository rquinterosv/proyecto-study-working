import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <h4>Footer Content</h4>
            <p>This is the footer content. You can add various information and links here.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1 234 56789</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className="text-center">
          <Col>
            <p>&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

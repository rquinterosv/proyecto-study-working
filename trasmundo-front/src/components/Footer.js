import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../css/footer.module.css';

import FacebookIcon from '../img/facebook.svg';
import InstagramIcon from '../img/instagram.svg';
import LinkedinIcon from '../img/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h5>Contact Us</h5>
            <p>Email: contacto@trasmundo.com</p>
            <div className={`social-icons ${styles.socialIcons}`}>
            <a href="enlace-a-tu-perfil-de-Facebook" className={`social-icon ${styles.socialIcon}`}><img src={FacebookIcon} alt="Facebook"  style={{ width: '50px', height: '50px', padding: '5px' }} /></a>
            <a href="enlace-a-tu-perfil-de-Instagram" className={`social-icon ${styles.socialIcon}`}><img src={InstagramIcon} alt="Instagram"  style={{ width: '50px', height: '50px', padding: '5px' }} /></a>
            <a href="enlace-a-tu-perfil-de-LinkedIn" className={`social-icon ${styles.socialIcon}`}><img src={LinkedinIcon} alt="LinkedIn"  style={{ width: '50px', height: '50px', padding: '5px' }} /></a>
            </div>
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

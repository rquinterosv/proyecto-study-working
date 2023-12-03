import React from 'react';
import '../css/menu.css';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Menu() {

  return (
    <Navbar expand="lg" className='p-3' bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="Trasmundo Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-lg-flex">
          <Nav.Link as={Link} to="/" style={{ color: '#81A649' }}>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: '#81A649' }}>Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: '#81A649' }}>Contacto</Nav.Link>
          <Nav.Link as={Link} to="/blog" style={{ color: '#81A649' }}>Blog</Nav.Link>
          <Nav.Link href="/#services" style={{ color: '#81A649' }}>Servicios</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
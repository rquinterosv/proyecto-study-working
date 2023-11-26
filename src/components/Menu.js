import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" className='p-3'>
      <Navbar.Brand as={Link} to="/">SW Experience</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-lg-flex">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          <NavDropdown title="Destinos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/action/3.1">Canada</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/action/3.2">España</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/action/3.3">Inglaterra</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;

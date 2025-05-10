import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navs = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="white" className="shadow-none ">
      <Container>
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#qualification">Qualification</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="">Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;

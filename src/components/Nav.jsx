import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navs = () => {

 const handleClick = () => {
  const link = document.createElement("a");
  link.href = "/resume/jothi_venkat_resume.pdf"; // served from public folder
  link.download = "JothiVenkata_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log("Button clicked!");
};

  return (
    <Navbar expand="lg" variant="white" className="shadow-none text-white ">
      <Container>
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#qualification">Qualification</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="" onClick={handleClick}>
            Download Resume
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAppContext } from "./Context";

function NavigationBar() {
  const { companyName, companyNumber } = useAppContext();
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg" className="position-fixed top-0 w-100 ">
        <Container>
          <Navbar.Brand href="#home">{companyName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href={`tel:${companyNumber}`} className="text-dark">
                {companyNumber}
              </Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

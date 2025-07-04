import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { useAppContext } from "./Context";
// Adjust the path as necessary
function NavigationBar() {
  // const { logo } = useAppContext();
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              M <sup>2</sup> Decorators
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-button"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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

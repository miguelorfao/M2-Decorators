import React from "react";
import { Container, Button } from "react-bootstrap";
import { useAppContext } from "./Context";
import "../App.css";
function Hero() {
  const { companyName } = useAppContext();
  return (
    <div
      id="home"
      className="hero bg-dark text-white text-center d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Transform your space with style</h1>
        <p className="lead">Interior & exterior Decoration Tailored to you</p>
        <Button variant="light" size="lg" href="#contact">
          Get a Free Consultation
        </Button>
      </Container>
    </div>
  );
}

export default Hero;

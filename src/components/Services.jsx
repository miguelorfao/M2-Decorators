import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "../App.css";
function Services() {
  const services = [
    {
      title: "Interior Design",
      description:
        "Transform your indoor spaces with our expert interior design services.",
      icon: "/images/interior.jpg",
    },
    {
      title: "Exterior Design",
      description:
        "Enhance your outdoor areas with our professional exterior design solutions.",
      icon: "/images/exterior.jpg",
    },
    {
      title: "Furniture Selection",
      description:
        "Choose the perfect furniture pieces to complement your style and space.",
      icon: "/images/furniture.jpg",
    },
  ];

  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="d-flex justify-content-center align-items-center pt-4">
        {" "}
        {services.map((s, i) => (
          <Col md={6} lg={3} key={i}>
            <Card className="bg-dark text-white text-center my-3">
              <Card.Img
                className="services"
                src={s.icon}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              ></Card.Img>
              <Card.ImgOverlay className="services text-center d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.description}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;

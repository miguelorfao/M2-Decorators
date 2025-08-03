import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Gallery() {
  const images = [
    "./images/flooring.jpg",
    "./images/stairs.jpg",
    "./images/insulation.jpg",
  ];
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2 className="text-center my-4">Gallery</h2>

      <Container>
        <Row className="d-flex justify-content-center align-items-center gap-2">
          {images.map((src, i) => (
            <Col md={2} lg={3} className="text-center mb-4">
              {" "}
              <Card style={{ width: "100%" }}>
                {" "}
                <img key={i} src={src} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {" "}
      </div>
    </div>
  );
}

export default Gallery;

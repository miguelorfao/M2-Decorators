import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Gallery() {
  const images = [
    "./images/livingroom.png",
    "./images/passage.png",
    "./images/stairs.png",
  ];
  return (
    <Container>
      <h2 className="text-center my-4">Gallery</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {images.map((src, i) => (
          <div key={i}>
            {" "}
            <Card
              style={{ width: "25rem" }}
              className="border-0 rounded-5 card"
            >
              <img key={i} src={src} alt={`image + ${i}`} />
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Gallery;

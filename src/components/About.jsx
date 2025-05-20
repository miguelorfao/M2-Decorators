import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useAppContext } from "./Context";

function About() {
  const { companyName } = useAppContext();
  return (
    <div className="bg-light">
      <Container id="about" className="my-5 py-2">
        <Row className="align-items-center">
          <Col md={6}>
            <Image fluid src="/images/interior.jpg" className="rounded-4" />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2>About company</h2>
            <p>
              At {companyName}, we believe that every space has the potential to
              inspire. With over years of experience in transformation homes and
              business, we specialize in bespoke interior and exterior
              decoration tailored to our clients taste.
            </p>
            <p>
              From cozy indoor settings to stunning outdoor retreats, our
              mission is to bring style, comfort, and functionality together in
              perfect harmony, we work with our clients to understand their
              vision and bring them to life precision and creativity.
            </p>
            <ul>
              <li>Personalized Design Consultations</li>
              <li>Affordable Packages</li>
              <li>Fast Turnaround</li>
              <li>High Quality Materials</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

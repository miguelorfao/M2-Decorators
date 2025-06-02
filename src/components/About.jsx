import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useAppContext } from "./Context";

function About() {
  const { companyName } = useAppContext();
  return (
    <div className="bg-dark">
      <Container id="about" className="my-5 py-2">
        <Row className="align-items-center">
          <Col md={6} className="py-4">
            <Image fluid src="/images/interior.jpg" className="rounded-4" />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2>About company</h2>
            <p>
              At {companyName}, we believe that every space has the potential to
              inspire. We are a passionate team driven by creativity, vision,
              and exterior design.
            </p>
            <p>
              Whether it's a cozy living room transformation or inviting outdoor
              retreat, our mission is to bring style, comfort, and functionality
              together in perfect balance. We collaborate closely with each
              client to understand their vision and bring it to life with
              precision and care.
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

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { useAppContext } from "./Context"; // Assuming you have a context to get the email

function ContactForm() {
  const {
    companyEmail,
    companyNumber,
    companyStreet,
    companyCity,
    companyState,
    companyPostcode,
    companyCountry,
  } = useAppContext(); // Assuming you have a context to get the email
  // Assuming you have a context to get the name
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-dark py-3">
      <Container id="contact" className="my-5 py-2">
        <h2 className="text-center mb-4 text-white">Get in Touch</h2>
        <Row className="align-items-center">
          <Col md={{ span: 6 }} className="text-center">
            <Form
              onSubmit={handleSubmit}
              className="p-4 shadow rounded bg-white"
            >
              <Form.Group className="mb-3" controlId="formName">
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <div className="d-flex align-items-start">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={{ order: 2, span: 6 }} className="text-center">
            {" "}
            <div className="text-white">
              <br />
              <Nav className="text-center ">
                <Row className=" m-auto ">
                  <Col md={{ span: 6 }} className="text-center w-100">
                    <p className="text-muted">
                      <p className="text-white">
                        {" "}
                        Email:
                        <Nav.Link
                          href={`mailto:${companyEmail}`}
                          className="text-white border-bottom"
                        >
                          {companyEmail}
                        </Nav.Link>
                      </p>{" "}
                    </p>
                    <p className="text-white">
                      Phone:{" "}
                      <Nav.Link
                        href={`tel:${companyNumber}`}
                        className="text-white border-bottom"
                      >
                        {companyNumber}
                      </Nav.Link>
                    </p>
                    <p className="text-white">
                      Address:{" "}
                      <Nav.Link
                        href={`https://www.google.com/maps/place/${companyStreet},+${companyCity},+${companyState},+${companyPostcode},+${companyCountry}`}
                        className="text-white border-bottom"
                      >
                        <p>{companyStreet}</p>
                        <p>{companyCity}</p>
                        <p>{companyState}</p>
                        <p> {companyPostcode}</p>
                        <p>{companyCountry}</p>
                      </Nav.Link>{" "}
                    </p>
                  </Col>
                </Row>{" "}
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;

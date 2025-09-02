import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Nav, Alert } from "react-bootstrap";
import { useAppContext } from "./Context"; // Assuming you have a context to get the email
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { companyEmail, companyNumber } = useAppContext(); // Assuming you have a context to get the email
  // Assuming you have a context to get the name
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Success");
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Error");
        }
      );
  };

  useEffect(() => {
    // Reset status after 5 seconds
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <>
      {" "}
      <div className="bg-dark py-3">
        <Container id="contact" className="my-5 py-2">
          {status && (
            <Alert variant="success">
              {status === "Success"
                ? "Message sent successfully"
                : "Failed to send, please try again later"}
            </Alert>
          )}

          <h2 className="text-center mb-4 text-white">Get in Touch</h2>
          <Row className="align-items-center">
            <Col md={{ span: 6 }} className="text-center">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="First Name"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  value="send"
                >
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col md={{ order: 2, span: 6 }} className="text-center">
              {" "}
              <div className="text-white">
                <br />
                <div className="text-center">
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
                    </Col>
                  </Row>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;

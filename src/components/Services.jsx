import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "../App.css";
function Services() {
  const services = [
    {
      title: "Interior Design",
      description:
        "We offer expert interior and exterior painting, wallpaper hanging, plastering, and full decorating services, we ensure a flawless finish every time",
      icon: "/images/interior.jpg",
      list: "- Interior Design\n- Furniture Assembly\n- Painting and Decorating",
    },
    {
      title: "Exterior Design",
      description:
        "Enhance your outdoor areas with our professional exterior design solutions.",
      icon: "/images/exterior.jpg",
      list: "- Exterior Design\n- Landscaping\n- Outdoor Furniture Setup",
    },
    {
      title: "General Maintenance",
      description:
        "Keeping your space in peak condition with our comprehensive maintenance services.",
      icon: "/images/furniture.jpg",
      list: "- General Maintenance\n- Plumbing\n- Minor Electrical Repairs\n- Carpentry\n- boiler repairs and services done by registered gas safe engineer",
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
                  height: "18rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              ></Card.Img>
              <Card.ImgOverlay className="services text-center d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.description}</Card.Text>
                <Card.Text>{s.list}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className="bg-dark text-white text-center my-3 py-3 mx-auto">
        <h2>Our Commitment to you</h2>
        <hr />
        <div className="p-3 text-start">
          {" "}
          <ul>
            <li>
              {" "}
              <p>
                We're proud to offer wide range of maintenance services - from
                basic plumbing to basic electrical and general repairs.
              </p>
            </li>
            <li>
              {" "}
              <p>
                But we also know that no one can do everything,. If a job fall
                outside our scope, we'll connect you with a trusted professional
                who can get it done.
              </p>
            </li>
            <li>
              {" "}
              <p>
                We can help with minor electrical jobs such as changing sockets,
                installing light fixtures, and basic wiring tasks. For all other
                electrical work, including major installations or repairs, we
                recommend going with a fully certified contractors to ensure
                safety and compliance.
              </p>
            </li>
            <li>
              {" "}
              <p>
                We do not handle boiler installations or repairs directly, we
                work closely with certified heating engineers and contractors to
                provide you with reliable and safe boiler services. Please
                contact us and we will arrange for a qualified professional to
                assist you.
              </p>
            </li>
          </ul>
        </div>
      </Card>
    </Container>
  );
}

export default Services;

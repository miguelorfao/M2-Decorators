import React from "react";

import Marquee from "react-fast-marquee";
import { Container } from "react-bootstrap";

function Marquees() {
  const products = [
    {
      name: "Interior Design",

      image: "/images/interior.jpg",
    },
    {
      name: "Exterior Design",

      image: "/images/exterior.jpg",
    },
    {
      name: "Home Renovation",

      image: "/images/furniture.jpg",
    },
    {
      name: "Home Renovation",

      image: "/images/furniture.jpg",
    },
  ];
  return (
    <div>
      <Container id="Project">
        {" "}
        <h2 className="text-center my-5">Project</h2>
        <Marquee>
          {products.map((p, i) => (
            <div key={i} className="mx-5 text-center py-4">
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "200px", height: "200px" }}
              />
              <h2 className="text-center">{p.name}</h2>
            </div>
          ))}
        </Marquee>
      </Container>
    </div>
  );
}

export default Marquees;

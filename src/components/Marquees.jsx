import React from "react";
import { useAppContext } from "./Context";
import Marquee from "react-fast-marquee";
import { Container } from "react-bootstrap";

function Marquees() {
  const { products } = useAppContext();
  return (
    <div>
      <Container id="Project">
        {" "}
        <h2 className="text-center my-5">Project</h2>
        <Marquee>
          {products.map((p, i) => (
            <div key={i} className="mx-5 text-center">
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

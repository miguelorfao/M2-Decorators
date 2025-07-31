import React from "react";

function Gallery() {
  const images = ["./images/flooring.jpg"];
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2 className="text-center my-4">Gallery</h2>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          style={{
            width: "200px",
            height: "150",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
}

export default Gallery;

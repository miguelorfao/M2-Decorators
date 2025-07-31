import React from "react";

function Gallery() {
  const images = ["./images/flooring.jpg"];
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2 className="text-center my-4">Gallery</h2>
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
    </div>
  );
}

export default Gallery;

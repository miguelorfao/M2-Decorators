import React from "react";

function Review() {
  const reviews = [
    {
      name: "John D.",
      rating: 5,
      text: "Fantastic job painting our living room. Neat, professional, and fast. Highly recommended!",
    },
    {
      name: "Sarah P.",
      rating: 4,
      text: "Great experience! The team arrived on time and the finish was flawless. Will hire again.",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
    {
      name: "Mike L.",
      rating: 5,
      text: "Very helpful and polite decorators. Cleaned up everything after the job. Looks amazing!",
    },
  ];
  return (
    <div>
      {" "}
      <section
        style={{
          maxWidth: 900,
          margin: "60px auto",
          padding: "0 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ color: "#f1c40f", textAlign: "center", marginBottom: 40 }}>
          What Our Customers Say
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            height: "30rem",
            overflow: "auto",
            padding: "20px",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "5px", color: "#333" }}>
                {review.name}
              </h3>
              <p
                style={{ color: "#f1c40f", fontSize: "18px", margin: "5px 0" }}
              >
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p style={{ fontStyle: "italic", color: "#555" }}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Review;

import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Star } from "lucide-react";
import { db } from "./Firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

function Review() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const revs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(revs);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text || !rating) return;

    await addDoc(collection(db, "reviews"), {
      name,
      text,
      rating,
      timestamp: new Date(),
    });

    setName("");
    setText("");
  };

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
          {reviews.map((rev) => (
            <Card
              key={rev.id}
              className="bg-light text-dark"
              style={{ height: "220px" }}
            >
              <Card.Title className="p-4 d-flex justify-content-between">
                <h3 className="font-semibold text-uppercase">{rev.name}</h3>
                <h3>
                  {" "}
                  <div className="absolute top-4 right-4 text-yellow-500 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        fill={rev.rating >= star ? "currentColor" : "none"}
                        className={
                          rev.rating >= star
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </h3>
              </Card.Title>
              <hr />
              <Card.Text className="p-4">
                <q className="mt-2">{rev.text}</q>
              </Card.Text>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <Button className="button w-100 rounded-0" onClick={handleShow}>
          Write a Review
        </Button>
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <Form.Group
              className="mb-3"
              controlId="formGroupEmail"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formGroupPassword"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            >
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Enter a Review"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {" "}
              <Form.Label>Rating</Form.Label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className={`cursor-pointer ${
                      rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill={rating >= star ? "currentColor" : "none"}
                    onClick={() => setRating(star)}
                    required
                  />
                ))}
              </div>
            </Form.Group>
            <br />
            <button
              className="button "
              type="submit"
              style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
              onClick={handleClose}
            >
              Submit
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Review;

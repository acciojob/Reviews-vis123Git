import React, { useState } from "react";
import Review from "./Review";
import data from "../data.js";
import "../styles/App.css";

function App() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * data.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <Review review={data[index]} nextReview={nextReview} prevReview={prevReview} />
        <div className="button-container">
          <button className="random-btn" onClick={randomReview}>
            Surprise me
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

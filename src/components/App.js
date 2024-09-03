import React, { useState } from "react";
import Review from "./Review";
import data from "../data.js";
import "../styles/App.css";
function App() {
  const [review, setReview] = useState(data[0]);
  const nextHandleReview = ()=>{

        console.log("review===",review)
}
  return (
    <div className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <button className="random-btn">surprise me</button>
      <button className='prev-btn'>Previous</button>

      <Review key={review.id} review={review} />;
      <button className='next-btn' onClick={nextHandleReview(review)}>Next</button>

    </div>
  );
}

export default App;

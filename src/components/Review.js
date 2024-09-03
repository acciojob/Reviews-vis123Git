import React from "react";
import "../styles/review.css";

function Review({ review }) {
  return (
    <article className="review">
      <img src={review.image} alt={review.name} className="person-img" />
      <h4 id={`author-${review.id}`} className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
    </article>
  );
}

export default Review;

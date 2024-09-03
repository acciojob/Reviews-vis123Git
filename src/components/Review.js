import React from "react";
import "../styles/review.css";

function Review({ review, nextReview, prevReview }) {
  return (
    <article className="review">
      <button className="prev-btn" onClick={prevReview}>
        Previous
      </button>

      <img src={review.image} alt={review.name} className="person-img" />
      <h4 id={`author-${review.id}`} className="author">
        {review.name}
      </h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
      <button className="next-btn" onClick={nextReview}>
        Next
      </button>
    </article>
  );
}

export default Review;

import React from "react";
import "../styles/review.css";
function Review({ review }) {
  return (
    <div className="review">
      <p className="author" id={`author-${review.id}`}>
        {review.name}
      </p>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
      <img className="person-img" src={review.image} />
    </div>
  );
}

export default Review;

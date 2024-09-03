import React from "react";
import Review from "./Review";
import data from "../data.js";
import "../styles/App.css"
function App() {
  return (
    <div className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <button className="random-btn">surprise me</button>
      {data.map((el) => {
        return <Review key={el.id} review={el} />;
      })}
    </div>
  );
}

export default App;

import React from 'react'
import "../styles/review.css"
function Review({review}) {
  return (
    <div className='review'>
        <button className='prev-btn'>Previous</button>
        <p className='author' id={`author-${review.id}`}>{review.name}</p>
        <p className='job'>{review.job}</p>
        <p className='info'>{review.text}</p>
        <img className='person-img' src={review.image}/>
        <button className='next-btn'>Next</button>
    </div>
  )
}

export default Review
// src/card.jsx


import React from 'react'
import './Card.css';


const Card = ({ amount, img, checkoutHandler }) => {
    return (
      <div className="card">
        <img src={img} alt="Product" />
        <p>₹{amount}</p>
        <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
      </div>
    );
  };
  

export default Card;





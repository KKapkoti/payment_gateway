// src/card.jsx


import React from 'react'
import './Card.css';

// const Card = ({amount, img, checkoutHandler}) => {
//   return (
//     <VStack>
//         <Image src={img} />
//         <Text>{amount}</Text>
//         <Button onClick={checkoutHandler}>Buy Now</Button>
//     </VStack>
//   );
// };



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





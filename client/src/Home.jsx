//src/Home.jsx

import React from 'react'
import Card from './Card'
import axios from 'axios';


const Home = () => {

  const checkoutHandler = async (amount) => {
   try{
    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

      const {data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
          amount
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "razorWave",
        description: "E-commerce transaction",
        image: "https://avatars.githubusercontent.com/u/115528329?v=4 ",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "kavita",
            email: "rs0275645@gmail.com",
            contact: "7060742563"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#010457"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}catch (error) {
  console.error("Error in checkoutHandler:", error);
}
  };
  

  return(
  <div className="home">
  <div className="card-container">
    <Card amount={2} img="https://m.media-amazon.com/images/I/61aHJIjnH6L._SL1500_.jpg" checkoutHandler={checkoutHandler} />
    <Card amount={40000} img="https://d2xamzlzrdbdbn.cloudfront.net/products/0238a59b-33ee-49da-a79e-c290f4ca180323130756.jpg" checkoutHandler={checkoutHandler} />
    <Card amount={500} img="https://m.media-amazon.com/images/I/61hzuoXwjqL._SL1500_.jpg" checkoutHandler={checkoutHandler} />
  </div>
</div>
);
};


export default Home;



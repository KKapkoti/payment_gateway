//app.js

const express = require('express');
const { config } = require("dotenv");
const paymentRoute = require("./routes/paymentRouter.js");
const cors = require("cors");

config({ path: "./config/.env" });
const app = express();


// Allow requests from http://localhost:3000
app.use(cors({
   origin: 'https://payment-umber.vercel.app/',
   methods: ["POST", "GET"],
   credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req,res) =>{
   res.setHeader('Access-Control-Allow-Origin', 'https://payment-umber.vercel.app/');
   res.status(200).json({key:process.env.RAZORPAY_API_KEY})
});


app.get('/home', (req, res) => {
   res.status(200).json('Welcome, your app is working well');
 })
 
module.exports =app;






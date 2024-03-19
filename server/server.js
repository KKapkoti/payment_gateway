//server.js

const app  = require("./app.js");
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}`)
);


module.exports ={ instance };
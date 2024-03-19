//controllers/.paymentController.js


// const crypto = require("crypto");
const { instance } = require("../server.js"); 
// const { Payment } = require("../models/paymentModel.js");

const checkout = async(req, res) =>{
    try{
        const options = {
            amount: 5000,
            // amount: Number(req.body.amount * 100),
            currency: "INR",
    };
 
    const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
} catch (error) {
    console.error("Error in checkout:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Define the paymentVerification function
// const paymentVerification = async (req, res) => {
//     try {
//       const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
//       const body = razorpay_order_id + "|" + razorpay_payment_id;
  
//       const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
//         .update(body.toString())
//         .digest("hex");
  
//       const isAuthentic = expectedSignature === razorpay_signature;
  
//       if (isAuthentic) {
//         // Save payment details to the database
//         await Payment.create({
//           razorpay_order_id,
//           razorpay_payment_id,
//           razorpay_signature,
//         });
  
//         res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
//       } else {
//         res.status(400).json({ success: false, error: "Invalid Signature" });
//       }
//     } catch (error) {
//       console.error("Error in payment verification:", error);
//       res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
//   };
  
//   // Export the functions
//   module.exports = {
//     checkout,
//     paymentVerification,
//   };



module.exports = {
    checkout
};
  
  
  
  
  
  
  
  
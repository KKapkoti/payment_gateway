//routes/paymentRouter.js

const express = require('express');
const { checkout } = require('../controllers/paymentController.js');

const router = express.Router();


router.route("/checkout").post(checkout);



module.exports = router;





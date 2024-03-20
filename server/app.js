//app.js

const express = require('express');
const { config } = require("dotenv");

const paymentRoute = require("./routes/paymentRouter.js");

config({ path: "./config/.env" });


const app = express();


app.use("/api", paymentRoute);



module.exports =app;






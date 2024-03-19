const express = require('express');
const { config } = require("dotenv");
const paymentRouter = require("./routes/paymentRouter.js");
const cors = require("cors");
config({ path: "./config/.env" });


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api", paymentRouter);



module.exports =app;



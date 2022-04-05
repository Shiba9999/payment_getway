require('dotenv').config()
const express = require("express");
const expess = require("express");
const app = expess();
const cors=require("cors");
const Razorpay=require("razorpay");
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.post("/order", async(req, res) => {
  const amount = req.body.amount;
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

 const myOrder=await instance.orders.create({
    amount: amount *100,
    currency: "INR",
    receipt: "receipt#1",
  });
  res.status(200).json({
      success:true,
      amount,
      order:myOrder
  });
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/cart/:userId", (req, res) => {
  res.json({
    userId: req.params.userId,
    items: []
  });
});

app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    res.json({ order });
  } catch (err) {
    console.log(err);
    res.status(500).send("Order error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
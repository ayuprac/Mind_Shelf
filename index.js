import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
import Razorpay from "razorpay";

dotenv.config(); // moved up to make env vars available early

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Razorpay endpoint
app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// MongoDB connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

async function startServer() {
  try {
    await mongoose.connect(URI); // deprecated options removed
    console.log("Connected to mongoDB");

    // Define routes after DB connection
    app.use("/book", bookRoute);
    app.use("/user", userRoute);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

startServer();

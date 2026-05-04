require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Models
const OrdersModel = require("./model/OrdersModule");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");

// Routes
const authRoute = require("./routes/AuthRoute");

const app = express();

// ================= ENV =================
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// ================= MIDDLEWARE =================
app.use(express.json());

//  CORS (for local + deployed frontend)
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://your-frontend.vercel.app",   // 🔁 replace after deploy
    "https://your-dashboard.vercel.app"   // 🔁 replace after deploy
  ],
  credentials: true
}));

app.use(cookieParser());
app.use(authRoute);

// ================= ROUTES =================

// Test route (important for checking backend live)
app.get("/", (req, res) => {
  res.send("Backend is running ");
});

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const data = await HoldingsModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching holdings");
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const data = await PositionsModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching positions");
  }
});

// Add new order
app.post("/newOrder", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order added successfully");
  } catch (err) {
    console.log("Error saving order:", err);
    res.status(500).send("Error saving order");
  }
});

// ================= DATABASE + SERVER =================

//  Connect DB first, then start server
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log(" MongoDB Connected");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log(" MongoDB Error:", err);
  });
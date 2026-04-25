const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors({
  origin: [
    "https://spurvancelabs.com",
    "http://spurvancelabs.com",
    "https://admin.spurvancelabs.com",
    "http://admin.spurvancelabs.com",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
}));

app.use(express.json());

// routes
app.use("/api/waitlist", require("./src/routes/waitlistRoutes"));

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
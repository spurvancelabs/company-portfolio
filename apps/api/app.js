const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const cors = require("cors");

dotenv.config();
connectDB();

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
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/waitlist", require("./src/routes/waitlistRoutes"));

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const router = express.Router();

const { joinWaitlist } = require("../controllers/waitlistController");

// POST /api/waitlist
router.post("/", joinWaitlist);

module.exports = router;
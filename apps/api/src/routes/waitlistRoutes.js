const express = require("express");
const router = express.Router();

const { joinWaitlist, getWaitlist } = require("../controllers/waitlistController");

// POST /api/waitlist
router.post("/", joinWaitlist);
router.get("/", getWaitlist);

module.exports = router;
const Waitlist = require("../models/waitlist");

// POST /api/waitlist
exports.joinWaitlist = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // check if exists
    const existing = await Waitlist.findOne({ email });

    if (existing) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newEntry = await Waitlist.create({ email });

    return res.status(201).json({
      message: "Successfully added to waitlist",
      data: newEntry,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
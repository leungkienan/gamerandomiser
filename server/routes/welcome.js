const express = require("express");

const router = express.Router();

// GET /api/v1/welcome/
router.get("/", (req, res) => {
  try {
    res.json({ statement: "Welcome to external APIs!" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// api key FCDD6C175E80E02257338C5D676239BD


module.exports = router;

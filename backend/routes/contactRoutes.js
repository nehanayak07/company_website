const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.query(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.send("Contact saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

module.exports = router;

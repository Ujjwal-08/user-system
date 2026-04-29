const express = require("express");
const router = express.Router();
const authService = require("../services/authService");

router.post("/forgot-password", (req, res) => {
  const token = authService.generateResetToken(req.body.userId);


  console.log("Sending email with token:", token);

  res.send("reset email sent");
});

router.post("/reset-password", (req, res) => {
  const userId = authService.verifyResetToken(req.body.token);

  if (!userId) {
    return res.status(400).send("invalid token");
  }

  res.send("password updated");
});

module.exports = router;
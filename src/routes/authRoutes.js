const express = require("express");
const router = express.Router();

const authService = require("../services/authService");
const mailer = require("../services/mailerService");

router.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  const token = authService.generateResetToken(email);

  mailer.sendPasswordResetEmail(email, token);

  res.json({ message: "Reset email sent" });
});

router.post("/reset-password", (req, res) => {
  const { token, password } = req.body;

  const valid = authService.verifyResetToken(token);

  if (!valid) return res.status(400).send("Invalid token");

  authService.updatePassword(token, password);

  res.send("Password updated");
});

module.exports = router;
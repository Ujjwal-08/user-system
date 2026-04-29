const express = require("express");
const router = express.Router();

const userService = require("../services/userService");

router.post("/", (req, res) => {
  const user = userService.createUser(req.body);
  res.json(user);
});

module.exports = router;
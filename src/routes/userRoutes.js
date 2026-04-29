const express = require("express");
const router = express.Router();


const userService = require("../services/userService");

router.post("/", (req, res) => {
  try {
    const user = userService.create(req.body);
    res.json(user);
  } catch (e) {
    res.status(500).send("error");
  }
});


router.get("/all-users", (req, res) => {
  res.json(userService.getUsers());
});

module.exports = router;
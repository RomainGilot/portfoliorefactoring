const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/login", login);

router.post("/register", auth, register);

module.exports = router;

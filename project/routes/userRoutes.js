const express = require("express");
const {
  registerUser,
  getUser,
  loginUser,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
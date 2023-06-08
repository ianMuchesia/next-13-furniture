const express = require("express");
const {
  login,
  register,
  logout,
  showUser,
} = require("../controllers/authController");
const { authenticateUser } = require("../middleware/authentication");


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.get("/showMe",authenticateUser, showUser);

module.exports = router;

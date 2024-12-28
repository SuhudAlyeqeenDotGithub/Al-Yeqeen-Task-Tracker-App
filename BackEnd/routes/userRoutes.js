const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userControllers");

//register user
// Post request
// path /register
router.post("/register", registerUser);

//login user
// post request
// path /login
router.post("/login", loginUser);

module.exports = router;

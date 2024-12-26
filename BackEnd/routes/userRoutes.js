const express = require("express");
const router = express.Router();

//register user
// Post request
// path /register
router.post("/register", registerUser);

//login user
// post request
// path /login
router.post("/login", loginUser);

module.exports = router;

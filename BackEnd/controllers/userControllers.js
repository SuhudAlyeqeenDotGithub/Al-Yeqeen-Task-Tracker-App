const User = require("../mongooseModels/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//register user controller
const registerUser = asyncHandler(async (req, res) => {
  const { userName, userEmail, userPassword, userConfirmPassword } = req.body;

  //check if all fields are not empty
  // //check if the 2 passwords are equal
  if (!userName || !userEmail || !userPassword || !userConfirmPassword) {
    res.status(400);
    throw new Error("Please fill in all fields (name, email and passwords)");
  } else if (userPassword !== userConfirmPassword) {
    res.status(400);
    throw new Error("Paswords not matching.. Please try again");
  }

  //check if email exists in the database
  const userEmailExists = await User.findOne({ userEmail });
  if (userEmailExists) {
    res.status(409);
    throw new Error(
      `User currently have an account with this email ${userEmail}. Please log in using that`
    );
  }

  //get the password and hash it
  const hashedPassword = await bcrypt.hash(userPassword, 10);

  // create the user record in the database including the hashpassword in the database
  const user = await User.create({
    userName,
    userEmail,
    userPassword: hashedPassword,
  });

  // send a message of 201 of account creation success
  if (user) {
    const userToken = generateToken(user.id);
    res.status(201).json({
      message: "You have successfully being registered",
      userId: user.id,
      userName: user.userName,
      userEmail: user.userEmail,
      userToken,
    });
  }
});

//loginUserController
const loginUser = asyncHandler(async (req, res) => {
  const { userEmail, userPassword } = req.body;

  // check if email and password are not empty
  if (!userEmail || !userPassword) {
    res.status(400);
    throw new Error("Please fill in all fields (name, email and passwords)");
  }

  // if user exist in the database, get the hashed password on there record
  const user = await User.findOne({ userEmail });

  if (!user) {
    res.status(400);
    throw new Error(
      "This email is not registered with us. Please create an account..."
    );
  }

  //compare the hashed password with the entered password
  const passwordIsCorrect = await bcrypt.compare(
    userPassword,
    user.userPassword
  );

  if (!passwordIsCorrect) {
    res.status(400);
    throw new Error("Incorrect password for the associated email");
  }

  //if the password match generate a token for them using their id and send back a message of their details with the token
  const userToken = generateToken(user.id);
  res.status(200).json({
    userId: user.id,
    userName: user.userName,
    userEmail: user.userEmail,
    userToken,
  });
});

//generate jwt token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "3h" });
};

module.exports = { registerUser, loginUser };

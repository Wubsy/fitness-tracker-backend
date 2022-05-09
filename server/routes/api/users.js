const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");
require('dotenv').config()
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateActivityInput = require("../../validation/activity");
// Load User model
const User = require("../../models/User");

let Exercise = require('../../models/activity');
const passport = require("passport");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ userName: req.body.userName }).then(user => {
      if (user) {
          return res.status(400).json({ user: "User Name already exists" });
      } else {
        const newUser = new User({
          userName: req.body.userName,
          password: req.body.password,
          name: req.body.name
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const userName = req.body.userName;
  const password = req.body.password;
  // Find user by user name
    User.findOne({ userName }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernotfound: "User not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            process.env.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,

                user: userName


               
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
  
  router.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       User.findOne({ _id: req.user.id})
       .then(user => res.status(200).json(user))
          
          .catch(err =>
             res
                .status(400)
                .json({ user: "Error fetching user" })
          );
    }
 );
// @route DELETE api/users/
// @desc Delete user data in database
// @access Authorized
router.delete("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const decodedUser = getUserDataFromToken(req.headers["authorization"])
  try {
    await User.findByIdAndDelete(decodedUser.id)
    res.status(200).send()
  } catch (err) {
    res.status(401).send()
  }
})

// @route patch api/users/update
// @desc Update Up to 3 fields, username, password, and/or name
// @access Authorized
router.patch("/update", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const userToUpdate = getUserDataFromToken(req.headers["authorization"])
  let errCount = 0
  let message = {
    userName: "Unchanged",
    password: "Unchanged",
    name: "Unchanged"
  }
  //Check which data needs to be updated
  if (req.body.userName) {
    try {
      const userNameData = await updateUserData(userToUpdate.id, {userName: req.body.userName});
      message.userName = req.body.userName;
    } catch (err) {
      message.userName = "Failed to update username";
      errCount++;
      console.error(err);
    }
  }
  if (req.body.password) {
    try {
      const newPassHash = hashUserPassword(req.body.password);
      await updateUserData(userToUpdate.id, {password: newPassHash});
      message.password = "Password changed";
    } catch (err) {
      message.password = "Error changing password";
      errCount++;
      console.err(err);
    }
  }
  if (req.body.name) {
    try {
      const newNameData = await updateUserData(userToUpdate.id, {name: req.body.name});
      message.name = req.body.name;
    } catch (err) {
      message.name = "Error changing name";
      errCount++;
      console.err(err);
    }
  }
  if (errCount > 0) {
    res.status(500).json(message)
    return
  }
  console.log(message)
  res.status(200).json(message)
})

function getUserDataFromToken(token)  {
  token = token.replace("Bearer ", "") //Remove non-token data from string
  return jwt.verify(token, process.env.secretOrKey) //Pull user data from token
}

function hashUserPassword(data) {
  return bcrypt.hashSync(data, bcrypt.genSaltSync())
}

async function updateUserData(userId, updateQuery) {
  return User.findByIdAndUpdate(userId, updateQuery)
}

module.exports = router;
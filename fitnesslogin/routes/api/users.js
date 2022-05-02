const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
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
  User.findOne({ user: req.body.userName }).then(user => {
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
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
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


  router.post(
    "/add",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      //const userName= req.body.userName;
       const description = req.body.description;
       const duration = req.body.duration;
       const date=Date.parse(req.body.date)
       const { errors, isValid } = validateActivityInput(req.body);
       if (!isValid) {
          return res.status(400).json(errors);
       }
      
       const newExercise = new Exercise(
         { //userName,
           description,
           duration,
           date,
         }
       );
       newExercise
          .save()
          .then(doc => res.json(doc))
          .catch(err => console.log({ create: "Error creating new post" }));
    }
 );



  module.exports = router;
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const passport = require("passport");
let Exercise = require('../../models/activity');
const {ExtractJwt} = require("passport-jwt");
const {request} = require("express");

require('dotenv').config()

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true })



/*
Data expected from delete:
{
    activityId: "", //Should correlate to _id in exercises
    name: "" //Optional, maybe even suggested you don't, as the backend should be able to resolve this information
}

 */


router.post('/delete',  passport.authenticate("jwt", { session: false }), (req, res) => {
    let currToken = req.headers["authorization"]
    currToken = currToken.replace("Bearer ", "")
    const decodedUser = jwt.verify(currToken, process.env.SECRET)

    Exercise.findById(req.body.activityId, null, null, (err, activityToDelete) => {
        if (decodedUser.id === activityToDelete.userId)  {
            Exercise.findByIdAndDelete(req.body.activityId, null, (err, deletedActivity) => {
                if (err) {
                    res.status(500).json({message: "Error: "+err})
                    return
                }
            })
            res.status(200).json({message: "Activity deleted successfully"})
        } else {
            res.status(401).json({message: "User does not have permission or activity does not exist"})
        }
    })


})

module.exports = router;
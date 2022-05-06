const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const activities = require("./routes/api/activity");
const app = express();
require('dotenv').config();
const cors= require("cors");
app.use(cors())
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
//const db = process.env.MONGO_URI;
const activity = require("./validation/activity");
// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/activity", activities);

//const exercisesRouter = require('./routes/api/activity');
//app.use('/activity', exercisesRouter);

const port = process.env.PORT ; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
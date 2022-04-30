//DEPS
require("dotenv").config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const connectDB= require("./models/index")

//MIDWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//connect database

connectDB()


const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPass }

        users.push(user)

        res.status(201).send()
    }
    catch {
        res.status(500).send(req.body)
    }
})

app.post('/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send("Cannot find user")
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send( "Successfully logged in")
        }
        else {
            res.send("Authentication failed")
        }
    }
    catch {
        res.send(500).send()
    }})

//app.get('/', (req, res) => {
//    res.send("API is running")
//})




const exercisesRouter = require('./controllers/index');
app.use('/index', exercisesRouter);

app.listen(process.env.PORT, ()=> console.log(`server started on port ${process.env.PORT}`))
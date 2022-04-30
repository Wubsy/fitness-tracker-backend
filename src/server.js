//DEPS
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//MIDWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/register', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user != null) {
        res.status(400).send({message: "[Error] User already exists"})
    }

    try {
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPass }

        users.push(user) //Replace with database insertion later
        //Create token to be sent back to client
        console.log(process.env.SECRET)
        const userToken = jwt.sign({username:req.body.name}, process.env.SECRET, {expiresIn: 14400}) //Generate a token that expires in 5 hours



        res.status(201).send({token: userToken}) //Sends the token to the user so it can be used with the API
    }
    catch {
        res.status(500).send()
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
    }
})

app.listen(3000)
// noinspection SpellCheckingInspection

const router = require('express').Router()
const bodyParser = require('body-parser')
//const { request } = require('express')
const db2 = require("../models")
require('dotenv').config()

//import User from '../models/users'

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const passport = require("passport");




router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}

))

//const passwordDigestOne = new User({
//    passwordDigest: "xxxxxx"
//})

//await passwordDigestOne.save()

// @route POST users/register
// @desc Register the user
// @access Public
router.post('/register', async (req, res) => {
    // separate the req.body into password and the rest
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    if ((firstName === undefined) || (lastName === undefined) || (email === undefined) || (password === undefined)) {
        return res.status(400).json({error: "One or more required fields are empty"})
    }
    //Check for existing users with email
    db2.User.findOne({ email: email }).then(user => {
        if (user) {
            return res.status(400).json({error: "Email is already in use"})
        }
    })

    let passwordDigest = hashUserPassword(password)


    const objectUser = new Object({
        firstName,
        lastName,
        email,
        passwordDigest
    })


    console.log(req.body)
    console.log("hash:  " + passwordDigest)
    db2.User.create(objectUser)
        .then((user) => {
            console.log(user)
            return res.json(user)
        })
        .catch(err => {
            console.log("err", err)
        })

})

// @route POST users/login
// @desc Logs the user in and sends the token back
// @access Public
router.post('/login',  (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if ((email === undefined) || (password === undefined)) {
        return res.status(400).json({error: "Email and password are required"})
    }

    db2.User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({error: "Could not find account with given email address"})
        }
        bcrypt.compare(password, user.passwordDigest).then(success => {
            if (success) {
                const payload = {
                    id: user.id,
                    email: user.email
                }
                jwt.sign(payload, process.env.secretOrKey, {expiresIn: 86400}, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    })
                })
            } else {
                return res.status(400).json({error: "Password is incorrect"})
            }
        }).catch(err => res.status(400).json({error: err}))
    })
})

// @route GET users/
// @desc Get all users
// @access Restricted/Debug
router.get('/', (req, res) => {
    //await passwordDigestOne.save()

    db2.User.find()
        .then((user) => {
            res.json(user)
        })

    //res.send('Users')
})

// @route GET users/id
// @desc Get user by id
// @access Authenticated/Debug
/*
* SECURITY ISSUE! DO NOT GIVE EVERYONE ACCESS TO SEE THE WHOLE USER OBJECT
*/
router.get('/:id', passport.authenticate("jwt", { session: false }), (req, res) => {

    db2.User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({error: err}))
})

// @route PUT users/update
// @desc Updates user from id embedded in token
// @access Authorized
router.put('/update', passport.authenticate("jwt", { session: false }), (req, res) => {
    /*
    * Do not let the user input any data they want
    * Give them specifics and rehash password
    */
    if (!req.body.password){
        return res.status(400).json({error: "Full form data required"})
    }
    let updates = new Object({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordDigest: hashUserPassword(req.body.password)
    })
    db2.User.findOneAndUpdate({ _id: getUserDataFromToken(req.headers["authorization"]).id }, updates, { new: true })
        .then(_ => res.status(200).json({success: true}))
        .catch(err => res.status(400).json({error: err}))
})

// @route PATCH users/update
// @desc Updates partial user data from id embedded in token
// @access Authorized
router.patch('/update', passport.authenticate("jwt", { session: false }), (req, res) => {
    const userToUpdate = getUserDataFromToken(req.headers["authorization"])
    let updates = {}
    let message = {
        firstName: "Unchanged",
        lastName: "Unchanged",
        email: "Unchanged",
        password: "Unchanged",
    }
    /*
    We need to make sure the user doesn't input
    anything that we don't want them to, so we specifically look
    for only data that we support, and optionally, validate it

    Because this is a PATCH, we can't just check for one and call it a day
    */
    if (req.body.firstName) {
        updates.firstName = message.firstName = req.body.firstName
    }
    if (req.body.lastName) {
        updates.lastName = message.lastName = req.body.lastName
    }
    if (req.body.email) {
        updates.email = message.email = req.body.email
    }
    //Do not send their password back to them after it's been hashed
    if (req.body.password) {
        updates.passwordDigest = hashUserPassword(req.body.password)
        message.password = "Password updated"
    }
    //Send the updated data off
    db2.User.findByIdAndUpdate(userToUpdate.id, updates).then(_ => {
        return res.status(200).json(message)
    }).catch(err => {
        return res.status(400).json({error: err})
    })
})

// @route DELETE users/id
// @desc Delete user data in database
// @access Authorized
router.delete('/:id', passport.authenticate("jwt", { session: false }), (req, res) => {
    const decodedUser = getUserDataFromToken(req.headers["authorization"])
    if (req.params.id === decodedUser.id) {
        db2.User.findByIdAndDelete(req.params.id)
            .then(() => res.json("User successfully deleted"))
            .catch(err => res.status(400).json({error: err}))
    } else {
        res.status(403).json({error: "User id does not match logged in user"})
    }
})

function getUserDataFromToken(token) {
    token = token.replace("Bearer ", "")
    if (token) {
        return jwt.verify(token, process.env.secretOrKey)
    }
}

function hashUserPassword(data) {
    return bcrypt.hashSync(data, bcrypt.genSaltSync())
}



module.exports = router

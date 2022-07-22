const router = require('express').Router()
const bodyParser = require('body-parser')
const db = require("../models")

//Authorization
const jwt = require("jsonwebtoken")
const passport = require("passport")

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended:true
    })
)

// @route POST junk/add_junk
// @desc Add junk to the database
// @access Authenticated
router.post("/add_junk", passport.authenticate("jwt", { session: false }), (req, res) => {
    let newJunk = req.body
    newJunk.ownerid = getUserDataFromToken(req.headers["authorization"]).id
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Junk.create(newJunk)
        .then((placeVar) => {
            //console.log("placeVar: ", placeVar)
            res.status(200).json(newJunk)
        })
        .catch(err => {
            console.log('err', err)
            res.status(400).json({error: err})
        })
})

// @route GET junk/userId
// @desc Get all of a user's junk by the user's id
// @access Public
router.get('/:userId', (req, res) => {
    db.Junk.find({ ownerid: req.params.userId }, (err, junks) => {
        if (err) {
            res.status(400).json({error: err})
        } else {
            res.status(200).json(junks)
        }
    })
})

// @route GET junk/
// @desc Get all junk
// @access Public
router.get('/', (req, res) => {
    db.Junk.find()
        .then((junks) => { res.json(junks) })
})

// @route GET junk/id
// @desc Get junk by id
// @access Public
router.get('/:junkId', (req, res) => {
    let junkId = req.params.junkId
    if (!junkId) {
        res.status(404).json({ message: `no id found` })
    } else {
        db.Junk.findOne({ "_id": junkId })
            .then((id) => {
                if (!id) {
                    res.status(404).json({ message: `Could not find junk with id "${junkId}"` })
                } else {
                    res.json(id)
                }
            })
    }
})

// @route PUT junk/id
// @desc Edit all of a junk's data by id
// @access Authorized
router.put('/:junkId', passport.authenticate("jwt", { session: false }), (req, res) => {
    let junkId = req.params.junkId
    let updates = req.body
    if (!junkId) {
        res.json({ message: `no id found` })
    } else {
        db.Junk.findOne({ "_id": junkId })
            .then((id) => {
                if (!id) {
                    res.status(404).json({ message: `Could not find junk with id "${junkId}"` })
                } else {
                    if (id.ownerid !== getUserDataFromToken(req.headers["authorization"]).id) {
                        return res.status(401).json({error: "You do not own this junk"})
                    }
                    db.Junk.findOneAndUpdate({ _id: junkId }, updates, { new: true })
                        .then(updatedJunk => res.json(updatedJunk))
                        .catch(err => res.status(400).json("Error: " + err))
                }
            })
    }
})

// @route DELETE junk/id
// @desc Delete junk by id
// @access Authorized
router.delete('/:junkId', passport.authenticate("jwt", { session: false }), (req, res) => {
    let junkId = req.params.junkId
    console.log('junkId:  ',  junkId)
    if (!junkId) {
        res.json({ message: 'Id must be provided' })
    }
    else {
        db.Junk.findOne({ "_id": junkId })
            .then((id) => {
                if (!id) {
                    res.status(404).json({ message: `Could not find junk with id "${junkId}"` })
                }
                else {
                    if (id.ownerid !== getUserDataFromToken(req.headers["authorization"]).id) {
                        return res.status(401).json({error: "You do not own this junk"})
                    }
                    db.Junk.findByIdAndRemove(req.params.junkId)
                        .then(() => res.json("Junk Deleted )= "))
                        .catch(err => res.status(400).json({error: err}))
                }


            })

    }

  }  )

function getUserDataFromToken(token) {
    token = token.replace("Bearer ", "")
    if (token) {
        return jwt.verify(token, process.env.secretOrKey)
    }
}

module.exports = router





const router = require('express').Router()
const bodyParser = require('body-parser')
const db = require("../models")

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended:true
}

))



// page
router.get('/', (req, res) => {
    res.send('junk page')
})


router.post("/add_junk", async (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Junk.create(req.body)
        .then((placeVar) => {
            console.log("placeVar: ", placeVar)
            res.json(req.body)
        })
        .catch(err => {
            console.log('err', err)
            res.json(req.body)
        })
})

module.exports = router



const router = require('express').Router()
const userModel = require("../models")

// page
router.get('/', (req, res) => {
    res.send('junk page')
})


router.post("/add_junk", async (request, response) => {
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router



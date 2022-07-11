const router = require('express').Router()


// page
router.get('/', (req, res) => {
    res.send('junk page')
})

module.exports = router
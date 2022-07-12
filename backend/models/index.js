
require('dotenv').config()  //configuration
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports.Junk = require('./junks')


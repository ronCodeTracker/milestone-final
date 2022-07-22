
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 



const junkSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    price: { type: Number, default: 0 },
    receipt: { type: String, default: "none" },
    datepurchased: { type: String, default: '0 bc' },
    ownerid: { type: String, default: '_001'}
    //Set default ownerid to an admin's id so the data isn't parentless
    
})



const Junk = mongoose.model('Junk', junkSchema)
module.exports = Junk



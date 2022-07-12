
const mongoose = require('mongoose')



const junkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    price: { type: String, required: false, default: 'none' },
    receipt: { type: String, default: 'none' },
    datepurchased: { type: String, default: 'USA' },
    
    }
})



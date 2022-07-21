// junk app api

require('dotenv').config()  //configuration

// include express

const express = require("express")
const passport = require("passport");
require("./config/passport")(passport);

const app = express();// put express in a variable call 'app'

// Heroku deploy *****************

//const path = require("path");

//******************************* */

const PORT = process.env.PORT// env file assign

// ?  
const methodOverride = require('method-override')

// MIDDLEWARE
//app.set('views', __dirname + '/views')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Middleware
app.use(express.urlencoded({ extended: true }))

// Middleware
app.use(methodOverride('_method'))

// junk
app.use('/junk', require('./controllers/junk'))
app.use('/users', require('./controllers/users'))


// Heroku deployment  *****************

// Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

//**************************************

//app.use(express.json())
/*************************************************** */





//routes

//home page
app.get('/', (req, res) => {
    res.send('Home')
})






//listen
app.listen(PORT, () => {
    console.log('nomming at port ' + PORT)
})

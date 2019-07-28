// FileName: index.js
// Import express
let express = require('express')
// Initialize the app
let app = express();
// Import Body parser
let bodyParser = require('body-parser');
// Setup server port
var port = process.env.PORT || 3000;
// Import Mongoose
let mongoose = require('mongoose');
// Import routes
let apiRoutes = require("./routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true});
var db = mongoose.connection;
// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
// Use Api routes in the App
app.use('/',apiRoutes)
// Send message for default URL
app.get('/',(req,res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port,function () {
    console.log("Running RestHub on port " + port);
});
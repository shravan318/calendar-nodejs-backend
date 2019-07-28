var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    password:{
        type:String,
        required: true
    }
});


module.exports = mongoose.model('user', userSchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    branch: {
        type: String,
        minlength: 3,
        required: isStudent
    },
    year: {
        type: Number,
        required: isStudent
    },
    regNo:{
        type: String,
        required: isStudent,
        unique: true
    },
    userType: {
        type: String,
        enum: ['Teacher', 'Student','HOD','Director'],
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true})

function isStudent(){
    if(this.userType === 'Student' ){  //"this" contains the user document at the time of required validation
        return true;
    }
    return false;
}

module.exports = mongoose.model('user', User)
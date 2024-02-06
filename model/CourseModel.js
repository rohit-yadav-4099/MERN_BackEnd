const mongoose = require("mongoose");


const AddCourse = mongoose.Schema({
    id : Number,
    image : String,
    name:String,
    price:Number,
    date:String,
    dateheading:String,
    participants:String,
    participantsheading:String,
    duration:String,
    durationheading :String,
    email:String

});

const CourseAdd = mongoose.model("AddtoCartModel", AddCourse);
module.exports = {CourseAdd };
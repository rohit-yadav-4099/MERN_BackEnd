const mongoose=require("mongoose");
const courseSchema=new mongoose.Schema({
    useremail:String,
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

})

const coursetype=mongoose.model('usercourses', courseSchema);
module.exports={coursetype}
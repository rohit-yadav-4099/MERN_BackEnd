
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
    },
    email: {
        type: String,
        required: [true,"enter your email"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required:[ true,"enter your number"],
    },
    password: {
        type: String,
        required: [true,"enter your password"],
    },
    collage: {
        type: String,
        required: [true,"enter collage name"],
    },
    passingYear: {
        type: Number,
        required: [true,"enter passing year"],
    },
});



const UserRegister = mongoose.model("Register_user", userSchema);

module.exports = UserRegister;
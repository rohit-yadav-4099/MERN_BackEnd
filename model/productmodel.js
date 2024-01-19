const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  id: Number,
  price: Number,
  category: String,
  subCategory:String,
  rating: String,
  image: String,
  imageone: String,
  imagetwo:String,
  imagethree: String,
  imagefour: String,
  brand: String,
  para: String,
  text:String,
  about:String,
  company:String,
  repolink:String,
  hostlink:String,
  title:String,
  post:String,
  duration:String,
  durationheading:String,
  participantsheading:String,
  participants:String,
  dateheading:String,
  date:String,
});
const productColletion = mongoose.model("productColletion_All", productSchema);

module.exports = productColletion;
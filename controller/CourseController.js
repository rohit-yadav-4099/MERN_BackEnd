const {CourseAdd} = require("../model/CourseModel")

// const Cart = async (req, res) => {
//   const dataone = req.body;
//   const data = await AddCart.create(dataone);
//   res.send(data);
// };

// const getcartadd = async (req, res) => {
//   const data = await AddCart.find({});
//   res.send(data);
// };

// const DeleteCardone = async (req,res) =>{
//   const deletedata = await AddCart.deleteMany({});
//   res.send(deletedata)
// }

const CourseBuy = async (req, res) => {
  const data = req.body;
  const createdata = await CourseAdd.create(data);
  res.send(createdata);
};
const BuyGetCourse = async (req, res) => {
  const getcoursedata = await CourseAdd.find({});
  res.send(getcoursedata);
};

// const DeleteCart = async (req, res) => {
//   const data=req.body;
//   console.log(data.id)
//   const deletedata = await AddCart.findOneAndDelete({id:data.id});
//   res.send(deletedata);
// };

module.exports = {  CourseBuy, BuyGetCourse};
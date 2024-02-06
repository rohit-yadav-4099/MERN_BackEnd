const {CourseAdd} = require("../model/CourseModel")

const buyCourse = async (req, res) => {
  const coursedata = req.body;
  const buydata =  await CourseAdd.create(coursedata)
  res.send(buydata);
};

const courseBuy = async (req, res) => {
  const result = await CourseAdd.find({});
  res.send(result);
};

module.exports = {buyCourse,courseBuy};

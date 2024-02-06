const {buyCourse, courseBuy} = require("../controller/CourseController");

const courseRoute = require("express").Router();
courseRoute.post("/addcourse", buyCourse);
courseRoute.get("/getcourse",courseBuy);
module.exports = {courseRoute};

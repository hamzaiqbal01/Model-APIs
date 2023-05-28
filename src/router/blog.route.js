var express = require("express");

var blogService = require("../services/blogs.service");

var router = express.Router();

router.post("/AddBlog", blogService.Blog);
router.get("/GetBlog", blogService.GetBlog);
router.get("/GetBlog/:id", blogService.GetBlogDetail);

module.exports = router;

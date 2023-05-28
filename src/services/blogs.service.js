const Blog_Shema = require("../models/Blog_Shema");

exports.Blog = async (req, res) => {
  const { Blog_Name, Blog_detail, Blog_Img } = req.body;
  try {
    const isBlogExist = await Blog_Shema.findOne({ Blog_Name });

    if (!isBlogExist) {
      const newBlog = new Blog_Shema({ Blog_Name, Blog_detail, Blog_Img });
      await newBlog.save();
      res.status(200).send({ message: "Blog Added SuccessFully", code: 200 });
    } else {
      res.status(400).json({ message: `This Blog is already used`, code: 400 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.GetBlog = async (req, res) => {
  const AllBlog = await Blog_Shema.find();
  res.status(200).json({
    success: true,
    data: AllBlog,
  });
};

exports.GetBlogDetail = async (req, res) => {
  const id = req.params.id;

  try {
    const BlogDetail = await Blog_Shema.findById({ _id: id });
    if (!BlogDetail) {
      res.status(400).send({ message: "Blog not Found", code: 400 });
    }
    res.status(200).json({
      success: true,
      data: BlogDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

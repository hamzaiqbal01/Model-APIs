const mongoose = require("mongoose");

const Blog_Shema = new mongoose.Schema({
  Blog_Name: {
    type: String,
    required: true,
  },
  Blog_detail: {
    type: String,
    required: true,
  },
  Blog_Img: {
    type: String,
  },
});

module.exports = mongoose.model("Blog_Shema", Blog_Shema);

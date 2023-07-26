import mongoose from "mongoose";

// define schema for posts
const postSchema = new mongoose.Schema({
  date: Date,
  author: String,
  title: String,
  content: String,
});

// compile schema into a Model
const Post = mongoose.model("Post", postSchema);

export default Post;

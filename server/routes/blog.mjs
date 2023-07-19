import express from "express";
import mongoose from "mongoose";
import db from "../db/conn.mjs";

const router = express.Router();
const collection = db.collection("blog");

const postSchema = new mongoose.Schema({
  date: Date,
  author: String,
  title: String,
  content: String
})

const Posts = mongoose.model('Posts', postSchema);

router.get("/", async (req, res) => {
  let results = collection.find();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let result = collection.find();
});

router.post("/:id");

export default router;

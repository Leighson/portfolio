import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import blog from "./routes/blog.mjs"

const PORT = process.env.PORT || 0;
const app = express();

app.use(cors());

app.use("/blog", blog);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
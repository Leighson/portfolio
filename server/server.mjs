import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import environment variables with middleware
import dotenv from "dotenv";
dotenv.config();

// Create an Express.js instance
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Define a simple route
app.get('/api', (req, res) => {
    res.json({ users: ['Welcome to our API', 'hello', 'mark'] });
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
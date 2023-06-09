/***** MODULES *****/

/* SET EXPRESS & OPTIONS */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/* OTHER MODULES */
require("dotenv").config();
const _ = require("lodash");
const mongoose = require("mongoose");

/* SET RENDER ENGINE */
require("ejs");
app.set('view engine', 'ejs');


/***** DATABASE *****/

/* MONGO CLIENT */
const URI = "mongodb+srv://origin.howe4yr.mongodb.net/";
const SERVER_USERID = process.env.ORIGIN_USERID;
const SERVER_KEY = process.env.ORIGIN_KEY;
const DATABASE = "portfolio";

async function mongoConnect() {
    try {
        await mongoose.connect(URI, {
            user: SERVER_USERID,
            pass: SERVER_KEY,
            dbName: DATABASE
        });

        console.log(`Connected to mongoDB: ${DATABASE}`)
    } catch (err) {
        console.log(err);
    }
};

/* OBJECT DATA MODEL */
const PostsSchema = {
    title: String,
    author: String,
    content: String,
    date: { type: Date, default: Date.now },
};

const Post = mongoose.model("Post", PostsSchema);


/***** PAGES *****/

/* REDIRECT HOME to RESUME */
app.get('/', (req, res) => {
    res.redirect('/resume');
});

/* RESUME */
app.get('/resume', (req, res) => {
    res.render('resume.ejs');
});

/* PORTFOLIO */
app.get('/portfolio', (req, res) => {
    res.render('placeholder.ejs');
});

/* BLOG */
app.get('/blog', async (req, res) => {
    mongoConnect();

    let posts = await Post.find();

    console.log(posts);

    if (posts == "" || posts == null) {
        posts = [{
            title: "Hello",
            content: "World"
        }];
    }

    res.render('blog.ejs', {
        posts: posts
    });
});



/***** PORTS *****/

/* RAILWAY ACCOMMODATION */
let PORT = process.env.PORT;
if (PORT == null || PORT === "") {
  PORT = 3000;
}
/* DEPLOYMENT */
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
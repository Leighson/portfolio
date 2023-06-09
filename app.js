/***** MODULES *****/


/* EXPRESS with BODY-PARSER */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/* MONGOOSE CLIENT */
require("dotenv");
const mongoose = require("mongoose");
URI = "mongodb+srv://origin.howe4yr.mongodb.net/";
SERVER_USERID = process.env.ORIGIN_USERID;
SERVER_KEY = process.env.ORIGIN_KEY;
DATABASE = "portfolio";

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



/***** WEBPAGES *****/


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
app.get('/blog', (req, res) => {
    mongoConnect();
    res.render('placeholder.ejs');
});

/* DYNAMIC PORT for RAILWAY */
let PORT = process.env.PORT;
if (PORT == null || PORT === "") {
  PORT = 3000;
}

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
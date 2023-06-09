require("dotenv");
const ejs = require('ejs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/resume');
});

app.get('/resume', (req, res) => {
    res.render('resume.ejs');
});

app.get('/portfolio', (req, res) => {
    res.render('placeholder.ejs');
});

app.get('/blog', (req, res) => {
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
const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/resume', (req, res) => {
    res.render('index.ejs');
});

app.get('/portfolio', (req, res) => {
    res.render('placeholder.ejs');
});

app.get('/blog', (req, res) => {
    res.render('placeholder.ejs');
});


app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}...`);
});
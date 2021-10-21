const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const redis = require('redis');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => console.log('listening on port 8080'));
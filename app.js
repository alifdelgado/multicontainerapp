const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const redis = require('redis');
const fibonacci = require('./fibonacci');
const redisClient = redis.createClient({host: 'redis-server', port: 6379});

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/fibonacci', (req, res) => {
    const number = req.body.number;
    redisClient.get(number, (error, value) => {
        if(!value) {
            const result = fibonacci(number);
            redisClient.set(number, result);
            res.render('fibonacci', {number, result});
            return;
        }
        res.render('fibonacci', {number, result: value});
    });
});

app.listen(8080, () => console.log('listening on port 8080'));
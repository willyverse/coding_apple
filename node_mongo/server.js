const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('welcome to 8080');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/hello', (req, res) => {
    res.send('welcome');
});
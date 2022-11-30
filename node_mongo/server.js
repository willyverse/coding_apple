const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoConfig = require('./mongoConfig.json');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(`mongodb+srv://${mongoConfig.id}:${mongoConfig.password}@codingapple.ofswmdl.mongodb.net/?retryWrites=true&w=majority`,
    (error, client) => {
        if (error) { return console.log(error); }

        app.listen(8080, function () {
            console.log('welcome to 8080');
            console.log(mongoConfig.id, mongoConfig.password);
        });
    });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname + "/write.html");
});

app.post('/add', (req, res) => {
    res.send(`title: ${req.body.title} date: ${req.body.date}`);
    MongoClient.connect(`mongodb+srv://${mongoConfig.id}:${mongoConfig.password}@codingapple.ofswmdl.mongodb.net/?retryWrites=true&w=majority`,
        (error, client) => {
            if (error) { return console.log(error); }

            db = client.db('todoapp');

            db.collection('post').insertOne({ title: req.body.title, date: req.body.date }, (error, result) => {
                console.log('저장완료');
            });
        })
});
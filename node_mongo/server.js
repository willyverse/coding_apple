const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoConfig = require('./mongoConfig.json');
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

MongoClient.connect(`mongodb+srv://${mongoConfig.id}:${mongoConfig.password}@codingapple.ofswmdl.mongodb.net/?retryWrites=true&w=majority`,
    (error, client) => {
        if (error) { return console.log(error); }

        app.listen(8080, function () {
            console.log('welcome to 8080');
            console.log(mongoConfig.id, mongoConfig.password);
        });

        db = client.db('todoapp');
    });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname + "/write.html");
});

app.post('/add', (req, res) => {
    res.send(`title: ${req.body.title} date: ${req.body.date}`);
    db.collection('counter').findOne({ name: 'totalPost' }, (error, result) => {
        console.log(result.totalPost);
        var currentIndex = result.totalPost;

        db.collection('post').insertOne({ _id: currentIndex + 1, title: req.body.title, date: req.body.date }, (error, result) => {
            console.log('저장완료');

            db.collection('counter').updateOne({ name: 'totalPost' }, { $set: { totalPost: currentIndex + 1 } }, (error, result) => {
                // {$inc: {totalPost: 1}} 해도 동일한 표현임, $inc는 increase.
                if (error) { return console.log(error) };
            })
        });
    })


});

// /list로 GET 요청하면 실제 DB에 저장된 데이터들로 예쁘게 꾸며진 HTML을 보여줌
app.get('/list', (req, res) => {

    db.collection('post').find().toArray((err, data) => {
        console.log(data);
        res.render('list.ejs', { data: data });
    });
})
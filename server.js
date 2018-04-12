var express = require('express');
var app = express();
var fs = require('node-fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var info = null;

app.get('/history', (req, res) => {
    fs.readFile('./history/data.json', 'utf-8', (err, data) => {
        if (data) {
            console.log(data);
            res.send(data);
        } else {
            console.log(err);
        }
    });

});

app.post('/add', (req, res) => {
    var old = [];
    fs.readFile('./history/data.json', 'utf-8', (err, data) => {
        if (data) {

            old = JSON.parse(data);
            old.push(req.body);
            fs.writeFile('./history/data.json', JSON.stringify(old), (err) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(err);
                } else {
                    console.log(old);
                    res.send({"status": 200});
                }
            });

        } else {
            console.log(err);
        }
    });

});


app.listen(3001, () => {
    console.log('It\'s alive!');
});

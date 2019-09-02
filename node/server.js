const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://alanmilligan:stonks@stocks-jkbi5.mongodb.net/test?retryWrites=true&w=majority';
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const API_PORT = 3001
const app = express();
app.use(cors());
const router = express.Router();

const spawn = require("child_process").spawn;
spawn('python',['../data_scraper/scraper.py']);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/getAllData',(req,res) => {
    MongoClient.connect(uri, function(err,db) {
        if (err) {return err}
        var stocks = db.db("Stocks");
        stocks.collection("Stocks").find({}).toArray(function(err,data) {
            db.close();
            return res.json(data);
        })
    })
});

router.get('/queryData',(req,res) => {
    MongoClient.connect(uri, function(err,db) {
        if (err) {return err}
        const query = JSON.parse(req.query.query);
        var stocks = db.db("Stocks");
        stocks.collection("Stocks").find(query).toArray(function(err,data) {
            db.close();
            return res.json(data);
        })
    })
});

setInterval(function() {
    spawn('python',['../data_scraper/scraper.py']);
    console.log("Updateing Data...");
},1800000);


app.use('/api',router);
app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`));
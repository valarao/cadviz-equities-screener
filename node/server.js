const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://alanmilligan:stonks@stocks-jkbi5.mongodb.net/test?retryWrites=true&w=majority';
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const API_PORT = 3001
const app = express();
app.use(cors());
const router = express.Router();

app.use('/api',router);
app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`));
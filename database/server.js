require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../router');
const App = require('../src/index');
const Stock = require('./models/stock');

mongoose.Promise = global.Promise;

const app = express();
const router = express.Router();

// Url connection to the mongo server
const url =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@cluster0-dasrq.mongodb.net/test?retryWrites=true';

// Connect to server
mongoose.connect(url, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => ReactDOM.render(<App />));
db.on('error', error => console.warn('Warning', error));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.use((err, req, res, next) => {
  res.send({ error: err.message });
});

module.exports = app;

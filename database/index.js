require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const FindStockByTicker = require('./queries/FindStockByTicker');

mongoose.Promise = global.Promise;

const app = express();
const router = express.Router();

const API_PORT = 3001;

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

db.once('open', () => console.log('server is running'));
db.on('error', error => console.warn('Warning', error));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up CORS
app.use(cors());
app.options('*', cors());

router.get('/search/stocks', async (req, res) => {
  let ticker = req.params.ticker;

  FindStockByTicker(ticker)
    .then(result => {
      console.log(result);
      res.status(200).json({
        success: 1,
        data: result
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: 0,
        data: null
      });
      return;
    })
})

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
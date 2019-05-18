const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    name: String,
    xchg: String,
    ticker: String,
    mkcap: Number
});

const Stocks = mongoose.model('stocks', stockSchema);

module.exports = Stocks;
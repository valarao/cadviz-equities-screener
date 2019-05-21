const Stock = require('../models/stock');

/**
 * Creates a single stock in the Stocks collection.
 * @param {object} stockInfo - Object containing a name, exchange, ticker, and market capitalization
 * @return {promise} A promise that resolves with the Stock that was created
 */
module.exports = (stockInfo) => {
    const stock = new Stock(stockInfo);
    return stock.save();
};
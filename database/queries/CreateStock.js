const Stock = require('../models/stock');

/**
 * Creates a single stock in the Stocks collection.
 * @param {object} stockProps - Object containing a name, exchange, ticker, and market capitalization
 * @return {promise} A promise that resolves with the stock that was created
 */
module.exports = (stockProps) => {
    const stock = new Stock(stockProps);
    return stock.save();
};
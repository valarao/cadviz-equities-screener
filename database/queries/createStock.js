const Stock = require('../models/stock');

/**
 * Creates a single stock in the Stocks collection.
 * @param {object} stockInfo - Object containing a name, exchange, ticker, and market capitalization
 * @return {promise} A promise that resolves with the Stock that was created
 */
module.exports = {
    create(req, res, next) {
        const stockInfo = req.body;

        Stock.create(stockInfo)
            .then(stock => res.send(stock))
            .catch(next);
}
};
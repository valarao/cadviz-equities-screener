const Stock = require('../models/stock');

/**
 * Deletes a single stock in the Stocks collection.
 * @param {String} ticker - The ticker of the stock to be deleted
 * @return {promise} A promise that resolves with the Stock is deleted
 */
module.exports = {
    edit(req, res, next) {
        const ticker = req.params.ticker;
        const stockProps = req.body;

        Stock.findOneAndUpdate({ ticker: ticker }, stockProps)
            .then(() => Stock.findOne({ ticker: ticker }))
            .then(stock => res.send(stock))
            .catch(next);
    }

};
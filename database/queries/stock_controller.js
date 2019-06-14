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
    },
    
    delete(req, res ,next) {
        const ticker = req.params.ticker;

        Stock.findOneAndDelete({ ticker: ticker })
            .then(stock => res.status(204).send(stock))
            .catch(next);
    },

    edit(req, res, next) {
        const ticker = req.params.ticker;
        const stockProps = req.body;

        Stock.findOneAndUpdate({ ticker: ticker }, stockProps)
            .then(() => Stock.findOne({ ticker: ticker }))
            .then(stock => res.send(stock))
            .catch(next);
    },

    find(req, res, next) {
        
    }


};
const Stock = require('../models/stock');

/**
 * Deletes a single stock in the Stocks collection.
 * @param {String} _id - The ID of the stock to be deleted
 * @return {promise} A promise that resolves with the Stock is deleted
 */
module.exports = (_id) => {
    return stock.remove({ _id: _id });
};
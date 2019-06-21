const Stock = require('../models/stock');

/**
 * Finds a single artist in the artist collection.
 * @param {string} ticker - The ID of the record to find.
 * @return {promise} A promise that resolves with the stock that matches the id
 */
module.exports = (ticker) => {
    return Stock.findOne({ ticker: ticker });
};


const Stock = require('../models/stock');

/**
 * Finds a single artist in the artist collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the stock that matches the id
 */
module.exports = (_id) => {
    return Stock.findOne({ _id: _id });
};
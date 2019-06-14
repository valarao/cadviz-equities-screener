const Stock = require('../models/stock');

/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} stockProps - Object containing a name, exchange, ticker, and market capitalization
 * @return {promise} A promise that resolves when the record is edited
 */
module.exports = (_id, stockProps) => {
    Stock.update({ _id }, stockProps);
};

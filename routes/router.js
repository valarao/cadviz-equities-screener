const createStock = require('../database/queries/createStock');
const deleteStock = require('../database/queries/deleteStock');
const editStock = require('../database/queries/editStock');
const searchStock = require('../database/queries/searchStocks');

module.exports = app => {
    app.get('/api')
    app.post('/api/stock', createStock.create);
    app.put('/api/stock/:ticker', )
};
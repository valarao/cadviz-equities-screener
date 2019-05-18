const assert = require('assert');
const Stock = require('../models/stock');

describe('Deleting records', () => {
    let apple;

    beforeEach(done => {
        apple = new Stock({ name: 'Apple' });
        apple.save()
            .then(() => done());
    });

    it('delete a single record from db', done => {
        Stock.deleteOne({ name: 'Apple' })
            .then(() => { done() });
    });
});
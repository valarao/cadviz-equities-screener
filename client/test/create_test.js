const assert = require('assert');
const Stock = require('../database/models/stock');

describe('Creating records', () => {
    it('saves a stock to db', done => {
        const bill = new Stock({ name: 'Bill' });
        bill.save()
            .then(() => {
                assert(!bill.isNew);
                done();
            });
    });
});
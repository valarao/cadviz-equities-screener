const assert = require('assert');
const Stock = require('../database/models/stock');

describe('Creating records', () => {
    it('saves a stock to db', done => {
        const jill = new Stock({ name: 'Jill' });
        jill.save()
            .then(() => {
                assert(!jill.isNew);
                done();
            });
    });
});
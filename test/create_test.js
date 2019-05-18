const assert = require('assert');
const Stock = require('../models/stock');

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
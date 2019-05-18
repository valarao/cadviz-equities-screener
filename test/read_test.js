const assert = require('assert');
const Stock = require('../models/stock');

describe('Creating records', () => {
    it('writing a single stock to db', done => {
        const jill = new Stock({ name: 'Jill' });
        
        jill.save()
            .then(() => { 
                assert(!jill.isNew);
                done();
             });
    })
});
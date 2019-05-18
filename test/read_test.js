const assert = require('assert');
const Stock = require('../src/stock');

describe('Reading supplies out of the db', () => {
    it('writing a single stock to db', done => {
        const jill = new Stock({ name: 'Jill' });
        
        jill.save()
            .then(() => { 
                assert(!jill.isNew);
                done();
             });
    })
});
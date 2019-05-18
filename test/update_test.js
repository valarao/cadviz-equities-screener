const assert = require('assert');
const Stock = require('../models/stock');

describe('Updating records', () => {
    let apple;

    beforeEach((done) => {
        apple = new Stock({ 
            name: 'Apple',
            xchg: 'NYSE',
            ticker: 'AAPL',
            mkcap: 1000
         });

         apple.save()
            .then(() => done());
    });

    function assertmkcap(operation, done) {
        operation
            .then(() => Stock.find({}))
            .then((stocks) => {
                assert(stocks.length === 1);
                assert(stocks[0].mkcap === 1100);
                done();           
            });
    }

    it('instance type using set and save', (done) => {
        apple.set('mkcap', 1100);
        assertmkcap(apple.save(), done);
    })

})
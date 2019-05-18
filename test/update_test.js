const assert = require('assert');
const Stock = require('../database/models/stocks');

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

    function assertMkcap(operation, done) {
        operation
            .then(() => Stock.find({}))
            .then((stocks) => {
                assert(stocks.length === 1);
                assert(stocks[0].mkcap === 1100);
                done();
            });
    }

    function assertTicker(operation, done) {
        operation
            .then(() => Stock.find({}))
            .then((stocks) => {
                assert(stocks[0].ticker === 'TEST');
                done();
            });
    }

    it('instance type using set and save', done => {
        apple.set('mkcap', 1100);
        assertMkcap(apple.save(), done);
    });

    it('model instance can updateOne', done => {
        assertTicker(apple.updateOne({ ticker: 'TEST' }), done);
    });

});
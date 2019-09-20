const assert = require('assert');
const Stock = require('../database/models/stock');

describe('Reading records', () => {
    let apple, amazon, bill;

    beforeEach(done => {
        apple = new Stock({
            name: 'Apple',
            xchg: 'NYSE',
            ticker: 'AAPL',
            mkcap: 500
        });

        amazon = new Stock({
            name: 'Amazon',
            xchg: 'NYSE',
            ticker: 'AMZN',
            mkcap: 500
        });

        bill = new Stock({
            name: 'Bill'
        });

        Promise.all([apple.save(), amazon.save(), bill.save()])
            .then(() => done());
    });

    it('findOne stock by name', done => {
        Stock.findOne({ name: 'Apple' })
            .then(stock => {
                assert(stock.name === 'Apple');
                done();
            });
    });
});
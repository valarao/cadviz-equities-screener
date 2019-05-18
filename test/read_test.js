const assert = require('assert');
const Stock = require('../database/models/stocks');

describe('Reading records', () => {
    let apple, amazon, jill;

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

        jill = new Stock({
            name: 'Jill'
        });

        Promise.all([apple.save(), amazon.save(), jill.save()])
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
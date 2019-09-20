require('dotenv/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-dasrq.mongodb.net/test?retryWrites=true';

before(done => {
    mongoose.connect(url, { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', error => {
            console.warn('Warning', error);
        });
});

beforeEach(done => {
    const { stocks } = mongoose.connection.collections;
    stocks.drop(() => {
        done();
    });
});


const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect('mongodb+srv://tookoh:4vrHjVs7SHM8Lt4@cluster0-dasrq.mongodb.net/test?retryWrites=true',
        { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', error => {
            console.warn('Warning', error);
        });
})
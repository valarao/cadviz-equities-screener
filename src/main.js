require('dotenv/config');
import React from 'react';
import ReactDOM from 'react-dom';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Main = () => {
    
};

// Url connection to the mongo server
const url = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-dasrq.mongodb.net/test?retryWrites=true';

// Connect to server
mongoose.connect(url, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () =>
    ReactDOM.render(<Main />)
);
db.on('error', error => 
    console.warn('Warning', error)
);






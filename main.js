import React from 'react';
import ReacDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import mongoose from 'mongoose';

mongoose.Promise = Promise;

const App = () => {
    const store = createStore();
}


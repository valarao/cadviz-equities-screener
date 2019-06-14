import {
    SEARCH_STOCKS,
    FIND_STOCK
} from './types';

import CreateStock from '.../database/queries/createStock'
import DeleteStock from '.../database/queries/deleteStock'
import EditStock from '.../database/queries/editStock'
import SearchStocks from '.../database/queries/searchStocks'

export const searchStocks = (...criteria) => dispatch =>
    SearchStocksProxy(...criteria)
        .then((result = []) =>
            dispatch({ type: SEARCH_STOCKS, payload: result })
        );

export const findStock = id => dispatch =>
    FindStockProxy(id)
        .then(stock =>
            dispatch({ type: FIND_STOCK, payload: stock })
        );
        
export const createStock = props => dispatch =>
    CreateStockProxy(props) 


// Proxy functions that call the database queries

const SearchStocksProxy = (...args) => {
    const result = SearchStocks(...args);
    if (!result || !result.then) {
        return new Promise(() => { });
    }
    return result;
};

const FindStockProxy = (...args) => {
    const result = FindStock(...args);
    if (!result || !result.then) {
        return new Promise(() => { });
    }
    return result;
};

const CreateStockProxy = (...args) => {
    const result = CreateStock(...args);
    if (!result || !result.then) {
        return new Promise(() => { });
    }
    return result;
};

const EditStockProxy = (...args) => {
    const result = EditStock(...args);
    if (!result || !result.then) {
        return new Promise(() => { });
    }
    return result;
};


const DeleteStockProxy = (...args) => {
    const result = DeleteStock(...args);
    if (!result || !result.then) {
        return new Promise(() => { });
    }
    return result;
};

const refreshSearch = (dispatch, getState) => {
    const { stocks: { offset, limit } } = getState();
    const criteria = getState().form.filters.values;

    dispatch(SearchStocks({ name: '', ...criteria }, offset, limit));
}
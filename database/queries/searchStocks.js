const Stocks  = require('../models/stocks');

module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {

    const stocksInScope = Stocks
        .find(buildQuery(criteria))
        .sort({ [sortProperty]: -1 })
        .skip(offset)
        .limit(limit);
    
    const scopeCount = Stocks
        .find(buildQuery(criteria))
        .countDocuments();
    
    return Promise.all([stocksInScope, scopeCount])
        .then(query => {
            return {
                all: query[0],
                count: query[1],
                offset: offset,
                limit: limit
            }
        });
};

const buildQuery = criteria => {
    const query = {};

    if (criteria.xchg) {
        query.$text = { $search: criteria.xchg };
    };

    if (criteria.mkcap) {
        query.mkcap = {
            $gte: criteria.mkcap.min,
            $lte: criteria.mkcap.max
        };
    };

    return query;
};
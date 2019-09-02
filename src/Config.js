import React from 'react';

//Market Cap
//Enterprise Value
//Revenue
//EBITDA
//EPS
//Profit Margin
//Operating Margin
//Return on Equity
//Return on Assets
//Forward P/E
//EV/EBITDA
//EV/Revenue
//P/Sales
//P/Book
//Beta
//Debt/Equity
//Debt/EBITA
//Current Ratio
//Operating Cash Flow
//Levered Free Cash Flow
//Revenue Growth
//Earnings Growth
//Forward Annual Dividend Rate
//Forward Annual Dividend Yield
//Payout Ratio

const MarketCap = {
    'Any':{$ne:""},
    'Mega':{$gt:200000000000},
    'Large':{$lt:200000000000,$gt:10000000000},
    'Mid':{$gt:2000000000,$lt:10000000000},
    'Small':{$gt:300000000,$lt:2000000000},
    'Micro':{$gt:50000000,$lt:300000000},
    'Nano':{$lt:50000000}
}

const EnterpriseValue = [

]

const Revenue = [

]

const EBITDA = [

]

const EPS = [

]

const ProfitMargin = {
  'Any':{$ne:""},
  "Positive":{$gt:0},
  "Negative":{$lt:0},
  "Very Negative":{$lt:-0.2},
  "High":{$gt:0.2},
  "Under 90%":{$lt:0.9},
  "Under 80%":{$lt:0.8},
  "Under 70%":{$lt:0.7},
  "Under 60%":{$lt:0.6},
  "Under 50%":{$lt:0.5},
  "Under 40%":{$lt:0.4},
  "Under 30%":{$lt:0.3},
  "Under 20%":{$lt:0.2},
  "Under 10%":{$lt:0.1},
  "Under 5%":{$lt:0.05},
  "Under 0%":{$lt:0.0},
  "Under -10%":{$lt:-0.1},
  "Under -20%":{$lt:-0.2},
  "Under -30%":{$lt:-0.3},
  "Under -50%":{$lt:-0.5},
  "Under -70%":{$lt:-0.7},
  "Under -100%":{$lt:-1},
  "Over 0%":{$gt:0},
  "Over 5%":{$gt:0.05},
  "Over 10%":{$gt:0.1},
  "Over 15%":{$gt:0.15},
  "Over 20%":{$gt:0.2},
  "Over 25%":{$gt:0.25},
  "Over 30%":{$gt:0.3},
  "Over 35%":{$gt:0.35},
  "Over 40%":{$gt:0.4},
  "Over 45%":{$gt:0.45},
  "Over 50%":{$gt:0.5},
  "Over 60%":{$gt:0.6},
  "Over 70%":{$gt:0.7},
  "Over 80%":{$gt:0.8},
  "Over 90%":{$gt:0.9}
}

const OperatingMargin = {
  'Any':{$ne:""},
  "Positive":{$gt:0},
  "Negative":{$lt:0},
  "Very Negative":{$lt:-0.2},
  "High":{$gt:0.25},
  "Under 90%":{$lt:0.9},
  "Under 80%":{$lt:0.8},
  "Under 70%":{$lt:0.7},
  "Under 60%":{$lt:0.6},
  "Under 50%":{$lt:0.5},
  "Under 40%":{$lt:0.4},
  "Under 30%":{$lt:0.3},
  "Under 20%":{$lt:0.2},
  "Under 10%":{$lt:0.1},
  "Under 5%":{$lt:0.05},
  "Under 0%":{$lt:0.0},
  "Under -10%":{$lt:-0.1},
  "Under -20%":{$lt:-0.2},
  "Under -30%":{$lt:-0.3},
  "Under -50%":{$lt:-0.5},
  "Under -70%":{$lt:-0.7},
  "Under -100%":{$lt:-1},
  "Over 0%":{$gt:0},
  "Over 5%":{$gt:0.05},
  "Over 10%":{$gt:0.1},
  "Over 15%":{$gt:0.15},
  "Over 20%":{$gt:0.2},
  "Over 25%":{$gt:0.25},
  "Over 30%":{$gt:0.3},
  "Over 35%":{$gt:0.35},
  "Over 40%":{$gt:0.4},
  "Over 45%":{$gt:0.45},
  "Over 50%":{$gt:0.5},
  "Over 60%":{$gt:0.6},
  "Over 70%":{$gt:0.7},
  "Over 80%":{$gt:0.8},
  "Over 90%":{$gt:0.9}
}

const ROE = {
  'Any':{$ne:""},
  "Positive":{$gt:0},
  "Negative":{$lt:0},
  "Very Positive":{$gt:0.3},
  "Very Negative":{$lt:-0.15},
  "Under -50%":{$lt:-0.50},
  "Under -45%":{$lt:-0.45},
  "Under -40%":{$lt:-0.40},
  "Under -35%":{$lt:-0.35},
  "Under -30%":{$lt:-0.30},
  "Under -25%":{$lt:-0.25},
  "Under -20%":{$lt:-0.20},
  "Under -15%":{$lt:-0.15},
  "Under -10%":{$lt:-0.10},
  "Under -5%":{$lt:-0.05},
  "Over +5%":{$gt:0.05},
  "Over +10%":{$gt:0.1},
  "Over +15%":{$gt:0.15},
  "Over +20%":{$gt:0.20},
  "Over +25%":{$gt:0.25},
  "Over +30%":{$gt:0.30},
  "Over +35%":{$gt:0.35},
  "Over +40%":{$gt:0.40},
  "Over +45%":{$gt:0.45},
  "Over +50%":{$gt:0.50}
}

const ROA = {
  'Any':{$ne:""},
  "Positive":{$gt:0},
  "Negative":{$lt:0},
  "Very Positive":{$gt:0.15},
  "Very Negative":{$lt:-0.15},
  "Under -50%":{$lt:-0.50},
  "Under -45%":{$lt:-0.45},
  "Under -40%":{$lt:-0.40},
  "Under -35%":{$lt:-0.35},
  "Under -30%":{$lt:-0.30},
  "Under -25%":{$lt:-0.25},
  "Under -20%":{$lt:-0.20},
  "Under -15%":{$lt:-0.15},
  "Under -10%":{$lt:-0.10},
  "Under -5%":{$lt:-0.05},
  "Over +5%":{$gt:0.05},
  "Over +10%":{$gt:0.1},
  "Over +15%":{$gt:0.15},
  "Over +20%":{$gt:0.20},
  "Over +25%":{$gt:0.25},
  "Over +30%":{$gt:0.30},
  "Over +35%":{$gt:0.35},
  "Over +40%":{$gt:0.40},
  "Over +45%":{$gt:0.45},
  "Over +50%":{$gt:0.50}
}

const ForwardPE = {
  'Any':{$ne:""},
  "Low":{$lt:15},
  "Profitable":{$gt:0},
  "High":{$gt:50},
  "Under 5":{$lt:5},
  "Under 10":{$lt:10},
  "Under 15":{$lt:15},
  "Under 20":{$lt:20},
  "Under 25":{$lt:25},
  "Under 30":{$lt:30},
  "Under 35":{$lt:35},
  "Under 40":{$lt:40},
  "Under 45":{$lt:45},
  "Under 50":{$lt:50},
  "Over 5":{$gt:5},
  "Over 10":{$gt:10},
  "Over 15":{$gt:15},
  "Over 20":{$gt:20},
  "Over 25":{$gt:25},
  "Over 30":{$gt:30},
  "Over 35":{$gt:35},
  "Over 40":{$gt:40},
  "Over 45":{$gt:45},
  "Over 50":{$gt:50}
}

const EVEBITDA = [

]

const EVRevenue = [

]

const PSales = {
  'Any':{$ne:""},
  "Low":{$lt:1},
  "High":{$gt:5},
  "Under 1":{$lt:1},
  "Under 2":{$lt:2},
  "Under 3":{$lt:3},
  "Under 4":{$lt:4},
  "Under 5":{$lt:5},
  "Under 6":{$lt:6},
  "Under 7":{$lt:7},
  "Under 8":{$lt:8},
  "Under 9":{$lt:9},
  "Under 10":{$lt:10},
  "Over 1":{$gt:1},
  "Over 2":{$gt:2},
  "Over 3":{$gt:3},
  "Over 4":{$gt:4},
  "Over 5":{$gt:5},
  "Over 6":{$gt:6},
  "Over 7":{$gt:7},
  "Over 8":{$gt:8},
  "Over 9":{$gt:9},
  "Over 10":{$gt:10}
}

const PBook = {
  'Any':{$ne:""},
  "Low":{$lt:1},
  "High":{$gt:5},
  "Under 1":{$lt:1},
  "Under 2":{$lt:2},
  "Under 3":{$lt:3},
  "Under 4":{$lt:4},
  "Under 5":{$lt:5},
  "Under 6":{$lt:6},
  "Under 7":{$lt:7},
  "Under 8":{$lt:8},
  "Under 9":{$lt:9},
  "Under 10":{$lt:10},
  "Over 1":{$gt:1},
  "Over 2":{$gt:2},
  "Over 3":{$gt:3},
  "Over 4":{$gt:4},
  "Over 5":{$gt:5},
  "Over 6":{$gt:6},
  "Over 7":{$gt:7},
  "Over 8":{$gt:8},
  "Over 9":{$gt:9},
  "Over 10":{$gt:10}
}

const Beta = {
  'Any':{$ne:""},
  "Under 0":{$lt:0},
  "Under 0.5":{$lt:0.5},
  "Under 1":{$lt:1},
  "Under 1.5":{$lt:1.5},
  "Under 2":{$lt:2},
  "Over 0":{$gt:0},
  "Over 0.5":{$gt:0},
  "Over 1":{$gt:1},
  "Over 1.5":{$gt:1.5},
  "Over 2":{$gt:2},
  "Over 2.5":{$gt:2.5},
  "Over 3":{$gt:3},
  "Over 4":{$gt:4},
  "0 to 0.5":{$gte:0,$lte: 0.5},
  "0 to 1":{$gte:0,$lte: 1},
  "0.5 to 1":{$gte:0.5,$lte: 1},
  "0.5 to 1.5":{$gte:0.5,$lte: 1.5},
  "1 to 1.5":{$gte:1,$lte: 1.5},
  "1 to 2":{$gte:1,$lte:2}
}

const DebtEquity = {
  'Any':{$ne:""},
  "High":{$gt:0.5},
  "Low":{$lt:0.1},
  "Under 1":{$lt:1},
  "Under 0.9":{$lt:0.9},
  "Under 0.8":{$lt:0.8},
  "Under 0.7":{$lt:0.7},
  "Under 0.6":{$lt:0.6},
  "Under 0.5":{$lt:0.5},
  "Under 0.4":{$lt:0.4},
  "Under 0.3":{$lt:0.3},
  "Under 0.2":{$lt:0.2},
  "Under 0.1":{$lt:0.1},
  "over 1":{$gt:1},
  "Over 0.9":{$gt:0.9},
  "Over 0.8":{$gt:0.8},
  "Over 0.7":{$gt:0.7},
  "Over 0.6":{$gt:0.6},
  "Over 0.5":{$gt:0.5},
  "Over 0.4":{$gt:0.4},
  "Over 0.3":{$gt:0.3},
  "Over 0.2":{$gt:0.2},
  "Over 0.1":{$gt:0.1}
}

const DebtEBITDA = [

]

const CurrentRatio = {
  'Any':{$ne:""},
  "High":{$gt:3},
  "Low":{$lt:1},
  "Under 1":{$lt:1},
  "Under 0.5":{$lt:0.5},
  "Over 1":{$gt:1},
  "Over 1.5":{$gt:1.5},
  "Over 2":{$gt:2},
  "Over 3":{$gt:3},
  "Over 4":{$gt:4},
  "Over 5":{$gt:5},
  "Over 10":{$gt:10},
}

const OperatingCashFlow = [

]

const LeveredFCF = [

]

const RevenueGrowth = [

]

const EarningGrowth = [

]

const FADividendRate = [

]

const FADividendYield = {
  'Any':{$ne:""},
  "None":0.0,
  "Positive":{$gt:0.0},
  "High":{$gt:0.0},
  "Very High":{$gt:0.1},
  "Over 1%":{$gt:0.01},
  "Over 2%":{$gt:0.02},
  "Over 3%":{$gt:0.03},
  "Over 4%":{$gt:0.04},
  "Over 5%":{$gt:0.05},
  "Over 6%":{$gt:0.06},
  "Over 7%":{$gt:0.07},
  "Over 8%":{$gt:0.08},
  "Over 9%":{$gt:0.09},
  "Over 10%":{$gt:0.1},
}

const PayoutRatio = {
  'Any':{$ne:""},
  "None (0%)":0.0,
  "Positive":{$gt:0.0},
  "Negative":{$lt:0.0},
  "Low (<20%)":{$lt:0.2},
  "High(>50%)":{$gt:0.5},
  "Over 0%":{$gt:0.0},
  "Over 10%":{$gt:0.1},
  "Over 20%":{$gt:0.2},
  "Over 30%":{$gt:0.3},
  "Over 40%":{$gt:0.4},
  "Over 50%":{$gt:0.5},
  "Over 60%":{$gt:0.6},
  "Over 70%":{$gt:0.7},
  "Over 80%":{$gt:0.8},
  "Over 90%":{$gt:0.9},
  "Over 100%":{$gt:1.0},
  "Under 10%":{$lt:0.1},
  "Under 20%":{$lt:0.2},
  "Under 30%":{$lt:0.3},
  "Under 40%":{$lt:0.4},
  "Under 50%":{$lt:0.5},
  "Under 60%":{$lt:0.6},
  "Under 70%":{$lt:0.7},
  "Under 80%":{$lt:0.8},
  "Under 90%":{$lt:0.9},
  "Under 100%":{$lt:2.0},
}





const columns = [{
    dataField: 'Ticker',
    text: 'Ticker',
    sort: true
  }, {
    dataField: 'Company Name',
    text: 'Company',
    sort: true
  }, {
    dataField: 'Sector',
    text: 'Sector',
    sort: true
  }, {
    dataField: 'Industry',
    text: 'Industry',
    sort: true
  }, {
    dataField: 'Queriable.ProfitMargin',
    text: 'Profit Margin',
    sort: true
  }, {
    dataField: 'Queriable.MarketCap',
    text: 'Market Cap',
    sort: true
  }, {
    dataField: 'Queriable.ForwardPE',
    text: 'Forward P/E',
    sort: true
  }, {
    dataField: 'Queriable.DebtEquity',
    text: 'Debt/Equity',
    sort: true
  }, {
    dataField: 'Queriable.EPS',
    text: 'EPS',
    sort: true
  }, {
    dataField: 'Queriable.Beta',
    text: 'Beta',
    sort: true
  }
];

const sizePerPageOptionRenderer = ({
  text,
  page,
  onSizePerPageChange
}) => (
  <li
    key={ text }
    role="presentation"
    className="dropdown-page"
  >
    <a
      href="#"
      tabIndex="-1"
      role="menuitem"
      data-page={ page }
      onMouseDown={ (e) => {
        e.preventDefault();
        onSizePerPageChange(page);
      } }
      style={ {'line-height': '14px',
                'font-size': '12px'} }
    >
      { text }
    </a>
  </li>
);


export {MarketCap,
    EnterpriseValue, 
    Revenue, 
    EBITDA,
    EPS,
    ProfitMargin,
    OperatingMargin,
    ROE,
    ROA,
    ForwardPE,
    EVEBITDA,
    EVRevenue,
    PSales,
    PBook,
    Beta,
    DebtEquity,
    DebtEBITDA,
    CurrentRatio,
    OperatingCashFlow,
    LeveredFCF,
    RevenueGrowth,
    EarningGrowth,
    FADividendRate,
    FADividendYield,
    PayoutRatio,
    columns,
    sizePerPageOptionRenderer
};




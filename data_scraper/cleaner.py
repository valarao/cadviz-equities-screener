import requests
import json
import re
from bs4 import BeautifulSoup
import pymongo
import dns


keep_metrics = ['Market Capitalization',
                'Enterprise Value',
                'Revenue',
                'EBITDA',
                'Diluted EPS',
                'Profit Margin',
                'Operating Margin',
                'Return on Assets',
                'Return on Equity',
                'Forward P/E',
                'Enterprise Value/EBITDA',
                'Enterprise Value/Revenue',
                'Price/Sales',
                'Price/Book',
                'Beta',
                'Debt/Equity',
                'Current Ratio',
                'Operating Cash Flow',
                'Levered Free Cash Flow',
                'Quarterly Revenue Growth',
                'Quarterly Earnings Growth',
                'Forward Annual Dividend Rate',
                'Forward Annual Dividend Yield',
                'Payout Ratio']

query_names = ['MarketCap',
               'EnterpriseValue',
               'Revenue',
               'EBITDA',
               'EPS',
               'ProfitMargin',
               'OperatingMargin',
               'ROE',
               'ROA',
               'ForwardPE',
               'EVEBITDA',
               'EVRevenue',
               'PSales',
               'PBook',
               'Beta',
               'DebtEquity',
               'CurrentRatio',
               'OperatingCashFlow',
               'LeveredFCF',
               'RevenueGrowth',
               'EarningGrowth',
               'FADividendRate',
               'FADividendYield',
               'PayoutRatio',
               'DebtEBITDA'] #calculate

def clean(stock):
    cleaned = init_clean(stock);
    for new,old in zip(query_names,keep_metrics):
        try:
            cleaned['Queriable'][new] = float(stock['Metrics'][old])
        except:
            cleaned['Queriable'][new] = "N/A"
    try:
        debt = float(stock['Metrics']['Debt'])
        ebitda = float(stock['Metrics']['EBITDA'])
        cleaned['Queriable']['DebtEBITDA'] = round(float(debt/ebitda),4)
    except:
        cleaned['Queriable']['DebtEBITDA'] = "N/A";
    return cleaned


def init_clean(stock):
    cleaned = {
            'Ticker': stock['Ticker'],
            'Company Name': stock['Company Name'],
            'Industry': stock['Industry'],
            'Sector': stock['Sector'],
            'Queriable': {}
            }
    return cleaned

def numberfy(val):
    t = val[len(val)-1]
    v = val[0:len(val)-1]
    if ( t == 'B'):
        return str(int((float(v)*(10**9))))
    elif (t == 'M'):
        return str(int((float(v)*(10**6))))
    elif (t == '%'):
        return str(round(float(v)/100,4))
    else:
        return val


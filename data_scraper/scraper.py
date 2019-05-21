import requests
import json
import re
from bs4 import BeautifulSoup

ticker = 'fru'

result = requests.get("https://finance.yahoo.com/quote/" + ticker + ".TO/key-statistics?p=" + ticker + ".TO")
src = result.content
soup = BeautifulSoup(src, 'lxml')
data_items = soup.find_all(attrs={"class": "Fz(s) Fw(500) Ta(end)"})

metrics = ['Market Capitalization', 'Enterprise Value', 'Trailing P/E', 'Forward P/E', 'PEG Ratio', 'Price/Sales', 'Price/Book', 'Enterprise Value/Revenue', 'Enterprise Value/EBITDA', 
        'Fiscal Year End', 'Most Recent Quarter', 
        'Profit Margin', 'Operating Margin', 
        'Return on Assets', 'Return on Equity', 
        'Revenue', 'Revenue Per Share', 'Quarterly Revenue Growth', 'Gross Profit', 'EBITDA', 'Net Income to Common Shareholders', 'Diluted EPS', 'Quarterly Earnings Growth', 
        'Cash', 'Cash Per Share', 'Debt', 'Debt/Equity', 'Current Ratio', 'Book Value Per Share', 
        'Operating Cash Flow', 'Levered Free Cash Flow', 
        'Beta', '52-Week Change', 'S&P500 52-Week Change', '52-Week High', '52-Week Low', '50-Day Moving Average', '200-Day Moving Average', 
        '3-Month Average Volume', '10-Day Average Volume', 'Shares Outstanding', 'Float', 'Held by Insiders', 'Held by Institutions', 'Shares Short', 'Short Ratio', 'Short of Float', 'Short of Shares Outstanding', 'Shares Short (Last Month)', 
        'Forward Annual Dividend Rate', 'Forward Annual Dividend Yield', 'Trailing Annual Dividend Rate', 'Trailing Annual Dividend Yield', '5 Year Average Dividend Yield', 'Payout Ratio', 'Dividend Date', 'Ex-Dividend Date', 'Last Split Factor', 'Last Split Date']

boop = soup.find_all(attrs={"class": "Mt(15px)"})[0].get_text()
if ("-" in ticker):
    meep = boop.find("-") + 2
    boop = boop[meep:]
meep = boop.find("-") + 2 
beep = boop[meep:]
meep = beep.find("Toronto")
ree = beep[:meep]

stock = {
    'Company Name': ree,
    'Ticker': ticker.upper(),
    'Metrics': {}
    }

counter = 0
for item in data_items:
    str_item = str(item)
    regex_item = re.search("\>(.*?)\<", str_item)
    regex_trunc = regex_item.group()[1:-1]
    curr_metric = metrics[counter]
    print(curr_metric + ": " + regex_trunc)
    if (regex_trunc == ""):
        regex_trunc = "N/A" 
    stock['Metrics'][curr_metric] = regex_trunc
    counter = counter + 1

stock_json = json.dumps(stock, sort_keys=True, indent=4)
filename = 'raw_json/' + ticker + '.json'
with open(filename, 'w') as file:
    json.dump(stock, file, indent=4)
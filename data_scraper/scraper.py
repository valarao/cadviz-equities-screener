import requests
import json
import re
from bs4 import BeautifulSoup

TICKERS_ENERGY =      ['AAV', 'AOI', 'AKTA', 'AKTB', 'ACI', 'ALA', 'ARX', 'ACOX', 'ACOY', 'ATH', 'BAD', 'BTE', 'BXE', 'BNG', 'BIR', 'BKX', 'BNP', 'BNE', 'BRY', 'CFW', 'CNE', 'CNQ', 'CU', 'CPX', 'CJ', 'CUPU', 'CET', 'CVE', 'CQE', 'CEU', 'CKE', 'CSM', 'CNU', 'CPI', 'CDH', 'CPG', 'DEE', 'DXI', 'EGL', 'EMA', 'ENB', 'ECA', 'EFX', 'ERF', 'ESI', 'E', 'ESN', 'FAR', 'FTS', 'FRU', 'FEC', 'GXE', 'GEI', 'GTE', 'GXO', 'HE', 'HWO', 'HNL', 'HSE', 'H', 'HYD', 'IMO', 'IPO', 'IPL', 'IPCO', 'JOY', 'JE', 'KEL', 'KEY', 'KML', 'MXG', 'MCB', 'MEG', 'MTL', 'NOA', 'NVA', 'SFD', 'OBE', 'OXC', 'PONY', 'POU', 'PXT', 'PSI', 'PPL', 'PGF', 'PMT', 'PRQ', 'PEY', 'PHX', 'PNE', 'PPR', 'PSK', 'PD', 'PSD', 'QEC', 'SES', 'VII', 'SCL', 'SHLE', 'STEP', 'SRX', 'SDY', 'SU', 'SPB', 'SGY', 'TAO', 'TVE', 'TVK', 'TEV', 'TWM', 'TOG', 'TEI', 'TOT', 'TXP', 'TOU', 'TA', 'TNP', 'TRP', 'TGL', 'TCW', 'VNR', 'VLE', 'VET', 'W', 'WRG', 'WCP', 'YGR', 'ZAR']
TICKERS_RE =          ['AP-UN', 'APR-UN', 'AX-UN', 'BEI-UN', 'BRE', 'BBU-UN', 'BTB-UN', 'BPY-UN', 'CAR-UN', 'ICE', 'CSH-UN', 'CHP-UN', 'CIGI', 'CUF-UN', 'CRR-UN', 'CRT-UN', 'DRG-UN', 'DRA-UN', 'DIR-UN', 'D-UN', 'DRM-PA', 'FCR', 'FSV', 'GDC', 'GRT-UN', 'HR-UN', 'HLC', 'HOM-U', 'HOT-UN', 'INO-UN', 'IIP-UN', 'IVQ-U', 'KMP-UN', 'MEQ', 'MRD', 'MR-UN', 'MI-UN', 'MRC', 'MRG-UN', 'MRT-UN', 'NVU-UN', 'NWH-UN', 'PAR-UN', 'PLZ-UN', 'REI-UN', 'SIA', 'SOT-UN', 'SRT-UN', 'SRU-UN', 'SMU-UN', 'TPH', 'TNT-UN', 'WFC', 'WIR-U']
TICKERS_DIVERSIFIED = ['AW-UN', 'AAB', 'ADN', 'AEF', 'ACD', 'DRX', 'ARE', 'AFN', 'AGF-B', 'AIM', 'AC', 'BOS', 'AD', 'CLIQ', 'ALC', 'ATD-A', 'ATD-B', 'ALA', 'ADW-A', 'ATZ', 'AI', 'ATA', 'ACQ', 'AVP', 'BAD', 'BMO', 'BNS', 'BCE', 'BEK-B', 'BR', 'BDT', 'BDI', 'GBT', 'BBD-A', 'BBD-B', 'BPF-UN', 'BYD-UN', 'BOY', 'BBL-A', 'BRY', 'BRB', 'BAM-A', 'BIP-UN', 'BPO', 'DOO', 'BUI', 'CWL', 'CFW', 'CBL', 'CF', 'GOOS', 'CM', 'CNR', 'CP', 'CTC', 'CWB', 'CFP', 'CFX', 'CWX', 'CJT', 'CET', 'CCL-B', 'CRP', 'CERV', 'CEU', 'CHE-UN', 'CHW', 'CHR', 'CIX', 'MBA', 'CGX', 'CVG', 'CKI', 'CSM', 'CCA', 'CGO', 'GCL', 'CIGI', 'CFF', 'CSW-A', 'CJR-B', 'BCB', 'PMTS', 'CRWN', 'CXI', 'CYB', 'DCM', 'DHX', 'DCF', 'DIV', 'DOL', 'UFS', 'DII-A', 'DII-B', 'DC-A', 'EFH', 'ERM', 'ECN', 'ELF', 'EFN', 'EMP-A', 'EFX', 'ESI', 'E', 'ENT', 'EQB', 'ESN', 'EIF', 'XTC', 'EXE', 'FAH-U', 'FFH', 'FIH-U', 'FSZ', 'FTT', 'FC', 'FCR', 'FN', 'FSV', 'FAR', 'FGE', 'FRII', 'GH', 'GDI', 'GDC', 'MIC', 'GEO', 'WN', 'GEI', 'GIL', 'GVC', 'GS', 'GMP', 'GSY', 'XAU', 'GDL', 'FOOD', 'GC', 'GWO', 'GCG', 'GCT', 'HMM-A', 'HPS-A', 'HE', 'HDI', 'HRX', 'HWO', 'HLF', 'HLC', 'HCG', 'HNL', 'HBC', 'HYD', 'IAG', 'IBG', 'IFA', 'IGM', 'IDG', 'IFC', 'IAM', 'IFP', 'ITP', 'IPLP', 'JWEL', 'KBL', 'KEG-UN', 'KLS', 'KEW', 'LIF', 'LAS-A', 'LB', 'LNF', 'LNR', 'L', 'LGT-A', 'LXR', 'MPC', 'MAL', 'MG', 'MEQ', 'MDI', 'MFC', 'MFI', 'MRE', 'MAV', 'MKP', 'MCB', 'DR', 'MRD', 'MX', 'MRU', 'TPX-A', 'MRC', 'MSI', 'MTY', 'MTL', 'NA', 'NEO', 'BCI', 'OSB', 'NOA', 'NWC', 'NWH-UN', 'OLY', 'ONEX', 'OGD', 'PLC', 'PKI', 'PSI', 'PHX', 'PNP', 'PZA', 'PBL', 'PNC-A', 'POW', 'PWF', 'PD', 'PBH', 'PSD', 'QBR-A', 'RECP', 'RET', 'RFP', 'QSR', 'QSP-UN', 'RPI-UN', 'RCH', 'RBA', 'RME', 'RCI-B', 'RSI', 'ROOT', 'RY', 'RUS', 'SAP', 'SIS', 'SCU', 'SES', 'SEC', 'SJR-B', 'SCL', 'SIA', 'SRV-UN', 'ZZZ', 'SRU', 'SNC', 'SHLE', 'SPG', 'TOY', 'SII', 'SRHI', 'STN', 'STLC', 'SJ', 'STEP', 'RAY-A', 'SDY', 'SCB', 'SQP', 'SOX', 'SLF', 'SWH', 'SXP', 'SWP', 'TBL', 'T', 'TPH', 'TGO', 'TVK', 'TEV', 'TFII', 'EML-PA', 'TRI', 'TWM', 'TF', 'X', 'TIH', 'TD', 'TS-B', 'TOT', 'TRZ', 'TCL-A', 'TSL', 'TZZ', 'TZS', 'TCW', 'TCN', 'TRL', 'TSU', 'TVA-B', 'TWC', 'UNS', 'UNI', 'U', 'URB', 'VLN', 'VB', 'WJX', 'WFC', 'WCN', 'WFT', 'WRG', 'WEF', 'WJA', 'WTE', 'WCM-B', 'WPK', 'WSP', 'Y']
TICKERS_TECH =        ['VNP', 'ABT', 'ASP', 'ADVZ', 'AEZS', 'AJX', 'AKU', 'ALEF', 'AQN', 'ALYA', 'AIF', 'APHA', 'APS', 'ATP', 'AUP', 'ACB', 'BLDP', 'BHC', 'BYL', 'BLU', 'BB', 'BLX', 'BEP-UN', 'GPS', 'BU', 'CAE', 'CGY', 'TRST', 'WEED', 'CSE-PA', 'CRDL', 'CMH', 'CAS', 'CLS', 'CHH', 'CDAY', 'GIB-A', 'CPH', 'CLR', 'CMG', 'CSU', 'CORV', 'PATH', 'CTX', 'CRH', 'CRON', 'DBO', 'DSG', 'DRT', 'ECO', 'EFL', 'ENGH', 'ESP', 'ETX', 'ET', 'XCT', 'EXF', 'FRX', 'FTG', 'GEN', 'GLG', 'GWR', 'GTMS', 'HSM', 'HBP', 'HEXO', 'HLS', 'HYG', 'IMV', 'ISV', 'IN', 'INE', 'IPCI', 'IMP', 'ITC', 'KXS', 'GUD', 'KPT', 'LSPD', 'MAXR', 'MDF', 'MDNA', 'MBX', 'MOGO', 'NVCN', 'NEPT', 'NXJ', 'NFI', 'NPI', 'NRI', 'SFD', 'ONC', 'OTEX', 'OPS', 'OPT', 'PEGI', 'PFB', 'PHO', 'PL', 'PTG', 'PTS', 'PIF', 'PAY', 'PLI', 'PMN', 'QTRH', 'REAL', 'RDL', 'RVX', 'SHOP', 'SW', 'SUM', 'SEV', 'EDT', 'SOY', 'SXI', 'TCS', 'TGOD', 'ITX', 'TSGI', 'FIRE', 'TH', 'TMD', 'RNW', 'TRIL', 'TOS', 'TC', 'UR', 'VCM', 'VMD', 'VFF', 'WPRT', 'ZYME']
TICKERS_MINING =      ['AEM', 'ASR', 'AGI', 'IRON', 'AXR', 'ALO', 'AMM', 'AII', 'ALS', 'USA', 'ARG', 'ANX', 'APY', 'AQA', 'RGX', 'AR', 'AKG', 'ASND', 'AYM', 'ATL', 'ORA', 'AUG', 'AVL', 'ASO', 'ASM', 'AZZ', 'BTO', 'BAR', 'ABX', 'BSX', 'BKI', 'CAL', 'CCO', 'CCM', 'DNT', 'CS', 'CDV', 'CEE', 'CG', 'CNT', 'CXN', 'CIA', 'CGG', 'CLQ', 'CGT', 'COG', 'CNL', 'CMMC', 'COP', 'KOR', 'DML', 'DGC', 'DPM', 'DNG', 'ELR', 'ER', 'ECS', 'ELD', 'EDV', 'EDR', 'EFR', 'ETG', 'ERD', 'ERO', 'ESM', 'EOX', 'EXN', 'MIN', 'FR', 'FF', 'FM', 'FCU', 'FSY', 'FVI', 'FT', 'FNV', 'FVL', 'GMO', 'GMX', 'GGD', 'GSV', 'G', 'AUMN', 'GQM', 'GSC', 'GGA', 'GOLD', 'GCM', 'GPR', 'GUY', 'HRT', 'HZM', 'HBM', 'IMG', 'III', 'ITH', 'INV', 'IVN', 'JAG', 'KRN', 'KAT', 'KER', 'K', 'KL', 'LAM', 'LGO', 'LFX', 'LMC', 'LVN', 'LGD', 'LAC', 'LN', 'LUC', 'LUG', 'LUN', 'LYD', 'MAG', 'MND', 'MOZ', 'MAW', 'MYA', 'MUX', 'MGA', 'MAX', 'MSV', 'MQR', 'ME', 'MPVD', 'NMX', 'NCU', 'NGD', 'NML', 'NEXA', 'NXE', 'NEXT', 'NGQ', 'NCP', 'NHK', 'NB', 'NIF-UN', 'PDL', 'NCF', 'NDM', 'NZC', 'NG', 'NTR', 'OGC', 'OLA', 'ORL', 'OMI', 'ORV', 'OR', 'OSK', 'PAAS', 'PRU', 'PGLC', 'PTM', 'POM', 'PG', 'PVG', 'PCY', 'ROXG', 'RNX', 'RTG', 'RMX', 'SBB', 'SSL', 'SCY', 'SEA', 'SMF', 'SBI', 'S', 'SMT', 'SBR', 'SVB', 'SVM', 'SOLG', 'SLR', 'SOP', 'SSRM', 'SAU', 'DIAM', 'SAM', 'STGO', 'SWY', 'SMC', 'TLO', 'TNX', 'TKO', 'TECK-A', 'TGZ', 'TI', 'TMR', 'TXG', 'TML', 'TV', 'TMQ', 'TMI', 'TLG', 'TRQ', 'UWE', 'UEX', 'URE', 'NPK', 'VGZ', 'WM', 'WDO', 'WRN', 'WRX', 'WPM', 'XAM', 'XTG', 'YRI', 'YRB']

METRICS = ['Market Capitalization', 'Enterprise Value', 'Trailing P/E', 'Forward P/E', 'PEG Ratio', 'Price/Sales', 'Price/Book', 'Enterprise Value/Revenue', 'Enterprise Value/EBITDA',
           'Fiscal Year End', 'Most Recent Quarter',
           'Profit Margin', 'Operating Margin',
           'Return on Assets', 'Return on Equity',
           'Revenue', 'Revenue Per Share', 'Quarterly Revenue Growth', 'Gross Profit', 'EBITDA', 'Net Income to Common Shareholders', 'Diluted EPS', 'Quarterly Earnings Growth',
           'Cash', 'Cash Per Share', 'Debt', 'Debt/Equity', 'Current Ratio', 'Book Value Per Share',
           'Operating Cash Flow', 'Levered Free Cash Flow',
           'Beta', '52-Week Change', 'S&P500 52-Week Change', '52-Week High', '52-Week Low', '50-Day Moving Average', '200-Day Moving Average',
           '3-Month Average Volume', '10-Day Average Volume', 'Shares Outstanding', 'Float', 'Held by Insiders', 'Held by Institutions', 'Shares Short', 'Short Ratio', 'Short of Float', 'Short of Shares Outstanding', 'Shares Short (Last Month)',
           'Forward Annual Dividend Rate', 'Forward Annual Dividend Yield', 'Trailing Annual Dividend Rate', 'Trailing Annual Dividend Yield', '5 Year Average Dividend Yield', 'Payout Ratio', 'Dividend Date', 'Ex-Dividend Date', 'Last Split Factor', 'Last Split Date']


def get_data_file(ticker):
    result = requests.get("https://finance.yahoo.com/quote/" + ticker + ".TO/key-statistics?p=" + ticker + ".TO")
    src = result.content
    return BeautifulSoup(src, 'lxml')


def get_company_name(data_file, ticker):
    init_str = data_file.find_all(attrs={"class": "Mt(15px)"})[0].get_text()
    print(init_str)
    if ("-" in ticker):
        sub_index = init_str.find("-") + 2
        init_str = init_str[sub_index:]
    sub_index = init_str.find("-") + 2 
    sub_str = init_str[sub_index:]
    sub_index = sub_str.find("Toronto")
    return sub_str[:sub_index]


def init_stock_object(company_name, ticker):
    stock = {
        'Company Name': company_name,
        'Ticker': ticker.upper(),
        'Metrics': {}
    }
    return stock


def get_metrics(data_file, stock):
    counter = 0
    metric_items = data_file.find_all(attrs={"class": "Fz(s) Fw(500) Ta(end)"})
    for item in metric_items:
        str_item = str(item)
        regex_item = re.search("\>(.*?)\<", str_item)
        regex_trunc = regex_item.group()[1:-1]
        curr_metric = METRICS[counter]
        if (regex_trunc == ""):
            regex_trunc = "N/A" 
        stock['Metrics'][curr_metric] = regex_trunc
        counter = counter + 1


def write_json_file(stock, ticker):
    stock_json = json.dumps(stock, indent=4)
    filename = 'raw_json/' + ticker.lower() + '.json'
    with open(filename, 'w') as file:
        json.dump(stock, file, indent=4)


def scrape_file(ticker):
    data_file = get_data_file(ticker)
    company_name = get_company_name(data_file, ticker)
    stock = init_stock_object(company_name, ticker)
    get_metrics(data_file, stock)
    write_json_file(stock, ticker)


def scrape_sector(ticker_list):
    for ticker in ticker_list:
        scrape_file(ticker)


def scrape_all():
    scrape_sector(TICKERS_ENERGY)
    scrape_sector(TICKERS_RE)
    scrape_sector(TICKERS_DIVERSIFIED)
    scrape_sector(TICKERS_TECH)
    scrape_sector(TICKERS_MINING)


scrape_all()
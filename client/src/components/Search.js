import React, { Component } from 'react';
import EntryBox from './EntryBox';
import Table from 'react-bootstrap/Table'
import {MarketCap,EnterpriseValue,Revenue, EBITDA,EPS,ProfitMargin,OperatingMargin,ROE,ROA,
    ForwardPE,EVEBITDA,EVRevenue,PSales,PBook,Beta,DebtEquity,DebtEBITDA,CurrentRatio,OperatingCashFlow,
    LeveredFCF,RevenueGrowth,EarningGrowth,FADividendRate,FADividendYield,PayoutRatio} from './Config'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'Queriable.MarketCap':{$ne:""},
            'Queriable.EnterpriseValue': {$ne:""}, 
            'Queriable.Revenue': {$ne:""}, 
            'Queriable.EBITDA': {$ne:""},
            'Queriable.EPS': {$ne:""},
            'Queriable.ProfitMargin': {$ne:""},
            'Queriable.OperatingMargin': {$ne:""},
            'Queriable.ROE': {$ne:""},
            'Queriable.ROA': {$ne:""},
            'Queriable.ForwardPE': {$ne:""},
            'Queriable.EVEBITDA': {$ne:""},
            'Queriable.EVRevenue': {$ne:""},
            'Queriable.PSales': {$ne:""},
            'Queriable.PBook': {$ne:""},
            'Queriable.Beta': {$ne:""},
            'Queriable.DebtEquity': {$ne:""},
            'Queriable.DebtEBITDA': {$ne:""},
            'Queriable.CurrentRatio': {$ne:""},
            'Queriable.OperatingCashFlow': {$ne:""},
            'Queriable.LeveredFCF': {$ne:""},
            'Queriable.RevenueGrowth': {$ne:""},
            'Queriable.EarningGrowth': {$ne:""},
            'Queriable.FADividendRate': {$ne:""},
            'Queriable.FADividendYield': {$ne:""},
            'Queriable.PayoutRatio': {$ne:""}
        }
    }

    UpdateParent = () => this.props.update(this.state)

    ChangeMarketCap = (x) => {this.setState({'Queriable.MarketCap':x},this.UpdateParent)}
    ChangeEnterpriseValue = (x) => {this.setState({'Queriable.EnterpriseValue':x},this.UpdateParent)}
    ChangeRevenue = (x) => {this.setState({'Queriable.Revenue':x},this.UpdateParent)}
    ChangeEBITDA = (x) => {this.setState({'Queriable.EBITDA':x},this.UpdateParent)}
    ChangeEPS = (x) => {this.setState({'Queriable.EPS':x},this.UpdateParent)}
    ChangeProfitMargin = (x) => {this.setState({'Queriable.ProfitMargin':x},this.UpdateParent)}
    ChangeOperatingMargin = (x) => {this.setState({'Queriable.OperatingMargin':x},this.UpdateParent)}
    ChangeROE = (x) => {this.setState({'Queriable.ROE':x},this.UpdateParent)}
    ChangeROA = (x) => {this.setState({'Queriable.ROA':x},this.UpdateParent)}
    ChangeForwardPE = (x) => {this.setState({'Queriable.ForwardPE':x},this.UpdateParent)}
    ChangeEVEBITDA = (x) => {this.setState({'Queriable.EVEBITDA':x},this.UpdateParent)}
    ChangeEVRevenue = (x) => {this.setState({'Queriable.EVRevenue':x},this.UpdateParent)}
    ChangePSales = (x) => {this.setState({'Queriable.PSales':x},this.UpdateParent)}
    ChangePBook = (x) => {this.setState({'Queriable.PBook':x},this.UpdateParent)}
    ChangeBeta = (x) => {this.setState({'Queriable.Beta':x},this.UpdateParent)}
    ChangeDebtEquity = (x) => {this.setState({'Queriable.DebtEquity':x},this.UpdateParent)}
    ChangeDebtEBITDA = (x) => {this.setState({'Queriable.DebtEBITDA':x},this.UpdateParent)}
    ChangeCurrentRatio = (x) => {this.setState({'Queriable.CurrentRatio':x},this.UpdateParent)}
    ChangeOperatingCashFlow = (x) => {this.setState({'Queriable.OperatingCashFlow':x},this.UpdateParent)}
    ChangeLeveredFCF = (x) => {this.setState({'Queriable.LeveredFCF':x},this.UpdateParent)}
    ChangeRevenueGrowth = (x) => {this.setState({'Queriable.RevenueGrowth':x},this.UpdateParent)}
    ChangeEarningsGrowth = (x) => {this.setState({'Queriable.EarningGrowth':x},this.UpdateParent)}
    ChangeFADividendRate = (x) => {this.setState({'Queriable.FADividendRate':x},this.UpdateParent)}
    ChangeFADividendYield = (x) => {this.setState({'Queriable.FADividendYield':x},this.UpdateParent)}
    ChangePayoutRatio = (x) => {this.setState({'Queriable.PayoutRatio':x},this.UpdateParent)}

    render() {
        return (
            <Table striped bordered size="sm" className='tableA'>
                <tbody style={{fontWeight: 'bold'}}>
                    <tr>
                        <td>Market Cap</td>
                        <td><EntryBox options={MarketCap} update={this.ChangeMarketCap} id={MarketCap}/></td>
                        <td>Enterprise Value</td>
                        <td><EntryBox options={EnterpriseValue} update={this.ChangeEnterpriseValue} id={EnterpriseValue} /></td>
                        <td>Revenue</td>
                        <td><EntryBox options={Revenue} update={this.ChangeRevenue} id={Revenue} /></td>
                        <td>EBITDA</td>
                        <td><EntryBox options={EBITDA} update={this.ChangeEBITDA} id={EBITDA}/></td>
                        <td>EPS</td>
                        <td><EntryBox options={EPS} update={this.ChangeEPS} id={EPS}/></td>
                    </tr>
                    <tr>
                        <td>Profit Margin</td>
                        <td><EntryBox options={ProfitMargin} update={this.ChangeProfitMargin} id={ProfitMargin}/></td>
                        <td>Operating Margin</td>
                        <td><EntryBox options={OperatingMargin} update={this.ChangeOperatingMargin} id={OperatingMargin}/></td>
                        <td>Return on Equity</td>
                        <td><EntryBox options={ROE} update={this.ChangeROE} id={ROE}/></td>
                        <td>Return on Assets</td>
                        <td><EntryBox options={ROA} update={this.ChangeROA} id={ROA}/></td>
                        <td>Forward P/E</td>
                        <td><EntryBox options={ForwardPE} update={this.ChangeForwardPE} id={ForwardPE}/></td>
                    </tr>
                    <tr>
                        <td>EV/EBITDA</td>
                        <td><EntryBox options={EVEBITDA} update={this.ChangeEVEBITDA} id={EVEBITDA}/></td>
                        <td>EV/Revenue</td>
                        <td><EntryBox options={EVRevenue} update={this.ChangeEVRevenue} id={EVRevenue}/></td>
                        <td>P/Sales</td>
                        <td><EntryBox options={PSales} update={this.ChangePSales} id={PSales}/></td>
                        <td>P/Book</td>
                        <td><EntryBox options={PBook} update={this.ChangePBook} id={PBook}/></td>
                        <td>Beta</td>
                        <td><EntryBox options={Beta} update={this.ChangeBeta} id={Beta}/></td>
                    </tr>
                    <tr>
                        <td>Debt/Equity</td>
                        <td><EntryBox options={DebtEquity} update={this.ChangeDebtEquity} id={DebtEquity}/></td>
                        <td>Debt/EBITDA</td>
                        <td><EntryBox options={DebtEBITDA} update={this.ChangeDebtEBITDA} id={DebtEBITDA}/></td>
                        <td>Current Ratio</td>
                        <td><EntryBox options={CurrentRatio} update={this.ChangeCurrentRatio} id={CurrentRatio}/></td>
                        <td>Operating Cash Flow</td>
                        <td><EntryBox options={OperatingCashFlow} update={this.ChangeOperatingCashFlow} id={OperatingCashFlow}/></td>
                        <td>Levered FCF</td>
                        <td><EntryBox options={LeveredFCF} update={this.ChangeLeveredFCF} id={LeveredFCF}/></td>
                    </tr>
                    <tr>
                        <td>Revenue Growth</td>
                        <td><EntryBox options={RevenueGrowth} update={this.ChangeRevenueGrowth} id={RevenueGrowth}/></td>
                        <td>Earnings Growth</td>
                        <td><EntryBox options={EarningGrowth} update={this.ChangeEarningsGrowth} id={EarningGrowth}/></td>
                        <td>Dividend Rate</td>
                        <td><EntryBox options={FADividendRate} update={this.ChangeFADividendRate} id={FADividendRate}/></td>
                        <td>Dividend Yield</td>
                        <td><EntryBox options={FADividendYield} update={this.ChangeFADividendYield} id={FADividendYield}/></td>
                        <td>Payout Ratio</td>
                        <td><EntryBox options={PayoutRatio} update={this.ChangePayoutRatio} id={PayoutRatio}/></td>
                    </tr>
                </tbody>
                </Table>
        );
    }

}


export default Search;
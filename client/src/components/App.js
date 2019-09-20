import React, { Component } from 'react';
import './Custom.css';
import Table from './Table.js';


class App extends Component{
  constructor() {
    super();
  }



  render() {

    return(
      <div>
        <div className="top">
          <div>
            < h2 className="header" >Cadviz Equities Screener</h2>
          </div>
          <div className="description">
            "When they ask you to pay $300/year for premium account, what do you say? Not today."
          </div>
        </div>
        <div>
           <Table />
        </div>
      </div>
    );
  }
}

export default App;

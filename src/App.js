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
            < h2 className="header" >NotFinViz!</h2>
          </div>
          <div className="description">
            "What you tell the numbers."
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

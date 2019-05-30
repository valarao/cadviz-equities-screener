import React from 'react';
import Axios from 'axios';
import { BrowserRouter, Router } from 'react-router-dom';
import SearchBar from './SearchBar';

class Screener extends React.Component {
  state = { stocks: [] };

    async onSearchSubmit(ticker) {
      const response = await Axios.get('', {
      });
    }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default Screener;

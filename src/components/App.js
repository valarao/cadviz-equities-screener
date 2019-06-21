import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './StockList';
import db from '../api/db-api';


class App extends React.Component {
  state = { stocks: [] };

  onSearchSubmit = async term => {
    const response = await db.get('/api/search/stocks', {
      params: { query: term }
    }); 

    console.log(response);
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SearchList stocks={this.state.stocks}/>
      </div>
    );
  }
}

export default App;

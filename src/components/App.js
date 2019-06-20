import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './StockList';


class App extends React.Component {
  state = { stocks: [] };

  onSearchSubmit = async term => {
      console.log(term);
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

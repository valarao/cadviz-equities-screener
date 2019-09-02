import React, { Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Search from './Search.js';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {columns,sizePerPageOptionRenderer} from './Config';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getAllData')
            .then((data) => data.json())
            .then((res) => this.setState({data:res}));
    };

    QueryDB = (x) => {
        axios.get('http://localhost:3001/api/queryData', {
            params:{query:x}
        }).then((data) => {
            this.setState({data:data.data})
        })
    };

    render () {
          
          const options = {
            sizePerPageOptionRenderer
          };

        return (
            <div>
                <div>
                    <Search update={this.QueryDB}/>
                </div>
                <div className="tableMain">
                    <BootstrapTable
                                    keyField='ticker' 
                                    columns={columns} 
                                    data={this.state.data} 
                                    pagination={paginationFactory(options)}
                                    striped 
                                    bordered 
                                    hover
                                    />
                </div>
            </div>
        );
    }
}

export default Table;

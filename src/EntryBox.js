import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "./Custom.css";

class EntryBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTitle: "Any",
        }
    }

    changeName = (e) => {
        var newStr = e.slice(0,11);
        newStr = newStr.trim();
        this.setState({
            currTitle: newStr + (e.length > 11 ? "..." : "")
        })
        this.props.update(this.props.options[e])
    }

    render() {
        let options = Object.entries(this.props.options).map(([k,v]) => {
            return (
                <Dropdown.Item eventKey={k}> {k} </Dropdown.Item>
            );
        })      
        return (
            <DropdownButton variant="table" size="sm" className="test" title={this.state.currTitle} onSelect={this.changeName}>
                {options}
            </DropdownButton>  
        );
    }
}

export default EntryBox






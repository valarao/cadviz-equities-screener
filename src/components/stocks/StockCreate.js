import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class StockCreate extends Component {
    onSubmit(formProps) {
        this.props.createArtist(formProps);
    }

    render() {
        const { handleSubmit } = this.props;
        
    }




}
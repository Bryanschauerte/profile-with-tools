import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
    getNavigationState,
    getNavigationValueByName
} from './navigationState';
import classNames from 'classnames';
import Card from '../Layout/Card';
import NavigationContainer from './View/NavigationContainer';
import HeaderComponent from '../Elements/HeaderComponent';
import './navigation.css';

class Navigation extends Component {
    render(){

        const containerClassName = classNames('navigation', {
            'initial-nav' :(this.props.display === 'initial'),
            'side-nav': (this.props.display !== 'initial')
        });

        return (
            <Card className={containerClassName}>
                <HeaderComponent displayText="Bryan Schauerte"/>
                <NavigationContainer/>
            </Card>
        );
    }
}

Navigation.propTypes = {
    display: PropTypes.string
};

const mapStateToProps = (state)=> {
    return {
        display: getNavigationValueByName(state, 'display'),
        getNavigationState: getNavigationState(state)
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        dispatch
    };
};
export default connect(mapStateToProps, mapDispatchToProp)(Navigation);

import React, { Component } from 'react';
import {
    connect } from 'react-redux';
import { getHomeState, getHomeStateValue } from './homeSelectors';
import {
    changeDisplay,
    fetchWar } from './HomeActions';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import Container from '../../Layout/Container';
import Card from '../../Layout/Card';

class Home extends Component {
    componentDidMount(){
        this.props.getApi({ url: 'http://swapi.co/api/people/' });
    }

    render(){
        console.log(this.props, 'home props');

        return (
            <Container>
                <Card>
                    hi
                </Card>
            </Container>
        );
    }
}

function mapDispatchToProps (dispatch){
    return {
        getApi: (fetchParams) => dispatch(fetchWar(dispatch, fetchParams)),
        changeDisplay: (display) => dispatch(changeDisplay(display))
    };
}

function mapStateToProps(state) {
    console.log(get(state, 'HomeState'));

    return {
        HomeState: getHomeState(state, 'HomeState'),
        loading: getHomeStateValue(state, 'loading'),
        display: getHomeStateValue(state, 'display')

    };
}

Home.propTypes = {
    HomeState: PropTypes.any,
    changeDisplay: PropTypes.string,
    display: PropTypes.string,
    getApi: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

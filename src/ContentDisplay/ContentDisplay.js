import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changeDisplay } from '../Navigation/navigationActions';
import './contentDisplay.css';
import Navigation from '../Navigation/Navigation';
import Row from '../Layout/Row';
import DisplayContainer from './View/DisplayContainer';
import { getNavigationValueByName } from '../Navigation/navigationState';

class ContentDisplay extends Component {

    render(){
        return (
            <Row className="content-display-row">
                <Navigation/>
                <DisplayContainer display={this.props.display}/>
            </Row>
        );
    }
}
ContentDisplay.propTypes = {
    display: PropTypes.string,
    getRepositories: PropTypes.func,
    isLoading: PropTypes.bool,
    repositories: PropTypes.array
};

const mapStateToProps = (state)=> {
    console.log(state, 'state');

    return {
        display: getNavigationValueByName(state, 'display')
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        handleChangeDisplay: (targetDisplay) => dispatch(changeDisplay(targetDisplay))
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(ContentDisplay);

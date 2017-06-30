import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changeDisplay } from '../Navigation/navigationActions';
import { getNavigationValueByName } from '../Navigation/navigationState';
import './contentDisplay.css';
import Navigation from '../Navigation/Navigation';
import Row from '../Layout/Row';
import DisplayContainer from './View/DisplayContainer';

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
    handleChangeDisplay: PropTypes.func
};

const mapStateToProps = (state)=> {
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

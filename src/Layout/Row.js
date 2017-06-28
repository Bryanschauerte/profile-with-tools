import './layout.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {

    render(){
        return (
            <div className="base">
                <div className="base-row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Row.propTypes = {
    children: PropTypes.element
};

export default Row;

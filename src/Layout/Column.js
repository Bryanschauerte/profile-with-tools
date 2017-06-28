import React, {
    Component } from 'react';
import './layout.css';
import PropTypes from 'prop-types';

class Column extends Component {
    render(){

        return (
            <div className="base">
                <div className="base-column">
                    {this.props.children}
                </div>
            </div>);
    }
}

Column.propTypes = {
    children: PropTypes.element
};

export default Column;

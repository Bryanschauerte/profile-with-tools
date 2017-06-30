import React, {
    Component } from 'react';
import './layout.css';
import PropTypes from 'prop-types';

const Column = ({ children, className }) =>{
    return (
        <div  className={className ? `base ${className}` : 'base'}>
            <div className="base-column">
                {children}
            </div>
        </div>);
};

Column.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string
};

export default Column;

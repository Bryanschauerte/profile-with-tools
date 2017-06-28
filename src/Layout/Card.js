import './layout.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, headerComponent }) =>{
    return (
        <div className={className ? `card ${className}` : 'card'}>
            {headerComponent &&
            <div className="card-header">
                {headerComponent}
            </div>}
            <div className="inner-card">
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    headerComponent: PropTypes.element
};

export default Card;

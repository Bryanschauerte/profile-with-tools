import './layout.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) =>{
    return (
        <div className={className ? `card ${className}` : 'card'}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Card;

import React from 'react';
import './Layout.css';
import { PropTypes } from 'prop-types';

const Card = (props) => {

    return (
        <div className={`layout-card ${props.className ? props.className : ''}`}>
            <div className="inner-card">{props.children}</div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.Element,
    className: PropTypes.string
};
export default Card;

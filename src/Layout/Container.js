import React from 'react';
import './Layout.css';
import { PropTypes } from 'prop-types';

const Container = (props) =>{
    return (
        <div className={`layout-container ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.Element,
    className: PropTypes.string
};

export default Container;

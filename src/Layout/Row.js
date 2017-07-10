import './layout.css';
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundSVG from '../Layout/BackgroundSVG';

const Row = ({ children, className }) =>{
    return (
        <div  className={className ? `base ${className}` : 'base'}>
            <div className="base-row">
                <BackgroundSVG showSVGAnimation={true}/>
                {children}
            </div>
        </div>);
};

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string
};

export default Row;

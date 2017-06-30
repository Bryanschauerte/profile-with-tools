import React from 'react';
import { PropTypes } from 'prop-types';

const NavigationButton = ({ handleClick, classname, label, isSelected }) => (
    <button
        disabled={isSelected}
        className={`${classname} ${isSelected ? 'selected-button' : 'not-selected'}`}
        onClick ={handleClick}>
        {label}
    </button>);

NavigationButton.propTypes = {
    classname: PropTypes.string,
    handleClick: PropTypes.func,
    isSelected: PropTypes.bool,
    label: PropTypes.string
};

export default NavigationButton;

import React from 'react';
import { PropTypes } from 'prop-types';

const HeaderComponent = ({ displayText }) =>(
    <div className="header-component">
        <div className="header-component-text">
            {displayText}
        </div>
    </div>);

HeaderComponent.propTypes = {
    displayText: PropTypes.string
};

export default HeaderComponent;

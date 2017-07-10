import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavigationButton from '../../Elements/NavigationButton';
import classNames from 'classnames';
import { changeDisplay } from '../navigationActions';
import { getNavigationValueByName } from '../navigationState';
import '../navigation.css';

class NavigationContainer extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onDisplayChange(e);
    }

    render(){
        const navigationClass = classNames('navigation-container', {
            'initial-nav': (this.props.display === 'initial'),
            'post-selection': (this.props.display !== 'initial')
        });

        return (
            <div className={navigationClass}>
                <NavigationButton
                    isSelected={this.props.display === 'about'}
                    label="About"
                    classname="navigation-button"
                    handleClick={()=>this.handleClick('about')}/>
                <NavigationButton
                    label="Projects"
                    isSelected={this.props.display === 'projects'}
                    classname="navigation-button"
                    handleClick={()=>this.handleClick('projects')}/>
                <NavigationButton
                    label="Contact"
                    isSelected={this.props.display === 'contact'}
                    classname="navigation-button"
                    handleClick={()=>this.handleClick('contact')}/>
            </div>
        );
    }
}
NavigationContainer.propTypes = {
    display: PropTypes.string,
    onDisplayChange: PropTypes.func
};


const mapStateToProps = (state)=> {
    return {
        display: getNavigationValueByName(state, 'display')
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        onDisplayChange: (targetDisplay) => dispatch(changeDisplay(targetDisplay))
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(NavigationContainer);

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changeDisplay } from '../Navigation/navigationActions';
import './contentDisplay.css';
import Row from '../Layout/Row';
import { getNavigationValueByName } from '../Navigation/navigationState';
import classnames from 'classnames';
import Card from '../Layout/Card';
import About from './View/About';
import Tools from './View/Tools';
import Projects from './View/Projects';
import Contact from './View/Contact';
import Navigation from '../Navigation/Navigation';

class ContentDisplay extends Component {

    renderDisplay(){
        switch (this.props.display) {
            case 'about':
                return <About/>;

            case 'projects':
                return <Projects/>;

            case 'tools':
                return <Tools/>;

            case 'contact':
                return <Contact showSVGAnimation={true}/>;
            default:
                null;
        }
    }

    render(){

        const displayClasses = classnames('display-container', {
            inactive: (this.props.display === 'initial'),
            toolsActive: (this.props.display === 'tools'),
            projectsActive: (this.props.display === 'projects'),
            contactActive: (this.props.display === 'contact'),
            aboutActive: (this.props.display === 'about')
        });

        return (
            <Row className="content-display-row">
                <Navigation/>
                <Card className={displayClasses} headerComponent={<div className="section-title"><div className="title">{this.props.display.toUpperCase()}</div></div>}>
                    {this.renderDisplay()}
                </Card>
            </Row>
        );
    }
}
ContentDisplay.propTypes = {
    display: PropTypes.string,
    getRepositories: PropTypes.func,
    className: PropTypes.string,
    contentToShow: PropTypes.element,
    isLoading: PropTypes.bool,
    repositories: PropTypes.array
};

const mapStateToProps = (state)=> {
    console.log(state, 'state');

    return {
        display: getNavigationValueByName(state, 'display')
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        handleChangeDisplay: (targetDisplay) => dispatch(changeDisplay(targetDisplay))
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(ContentDisplay);

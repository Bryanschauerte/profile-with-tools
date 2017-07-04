import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Card from '../../Layout/Card';
import classnames from 'classnames';
import '../contentDisplay.css';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Contact from './Contact';


class DisplayContainer extends Component {

    renderDisplay(){
        switch (this.props.display) {
            case 'about':
                return <About/>;

            case 'projects':
                return <Projects/>;

            case 'tools':
                return <Tools/>;

            case 'contact':
                return <Contact/>;
            default:
                null;
        }
    }
    render(){
        const displayClasses = classnames('display-container', {
            'inactive': (this.props.display === 'initial')
        });

        return (
            <Card className={displayClasses} headerComponent={<h1 className="section-title">{this.props.display.toUpperCase()}</h1>}>
                <div className="internal">
                    {this.renderDisplay()}
                </div>
            </Card>);
    }
}

DisplayContainer.propTypes = {
    className: PropTypes.string,
    contentToShow: PropTypes.element,
    display: PropTypes.string
};

export default DisplayContainer;

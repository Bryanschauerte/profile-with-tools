import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Card from '../../Layout/Card';
import classnames from 'classnames';
import '../contentDisplay.css';

class DisplayContainer extends Component {

    renderDisplay(){
        switch (this.props.display) {
            case 'about':
                return (
                    <div>
                        <div>
                            <h1 className="inner-card-title">About</h1>
                        </div>
                        <div>
                            <p> bladkaljf alksjf alsdkjf asldj fsadf</p>
                        </div>
                    </div>);

            case 'projects':
                return (
                    <div>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div>
                            <p> bladkaljf alksjf alsdkjf asldj fsadf</p>
                        </div>
                    </div>);

            case 'tools':
                return (
                    <div>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div>
                            <p> bladkaljf alksjf alsdkjf asldj fsadf</p>
                        </div>
                    </div>);

            case 'contact':
                return (
                    <div>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div>
                            <p> bladkaljf alksjf alsdkjf asldj fsadf</p>
                        </div>
                    </div>);
            default:

        }
    }
    render(){
        const displayClasses = classnames('display-container', {
            'inactive': (this.props.display === 'initial')
        });

        return (
            <Card className={displayClasses} headerComponent={<h1>{this.props.display.toUpperCase()}</h1>}>
                <div>
                    <div>
                        <h1>About</h1>
                    </div>
                    <div>
                        <p> bladkaljf alksjf alsdkjf asldj fsadf</p>
                    </div>
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

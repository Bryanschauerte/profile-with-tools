import React from 'react';
import { PropTypes } from 'prop-types';
import '../contentDisplay.css';
import Octocat from '../../Octocat.jpg';
import LinkedIn from '../../LinkedIn.png';
import Gmail from '../../Gmail.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="intro-text">
                Take your pick...
            </div>
            <div className="email">
                <a href="mailto:bryan.schauerte@gmail.com">
                    <img src={Gmail} className="gmail-logo" alt="Gmail" />
                    <div className="link">Bryan.Schauerte@gmail.com</div>
                </a>
            </div>
            <div className="linked-in">
                <a href="http://www.linkedin.com/in/bryanschauerte" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} className="linked-in-logo" alt="LinkedIn" />
                    <div className="link">
                        LinkedIn/bryanschauerte
                    </div>
                </a>
            </div>
            <div className="git-hub">
                <a href="http://www.github.com/bryanschauerte" target="_blank" rel="noopener noreferrer">
                    <img src={Octocat} className="octocat-logo" alt="Octocat" />
                    <div className="link">GitHub/bryanschauerte</div>
                </a>
            </div>
        </div>);
};

Contact.propTypes = {
    showSVGAnimation: PropTypes.bool
};

export default Contact;

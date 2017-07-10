import React from 'react';
import { PropTypes } from 'prop-types';
import '../contentDisplay.css';

const About = () => (
    <article className="about-view">
        <div className="content">
            <header className="about-title">
                <h1 className="name">
                    Bryan Schauerte
                </h1>
                <p className="sub-title">
                    Software Engineer
                </p>
            </header>
            <div className="tinkering-container">
                Currently Tinkering With
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>Redux</li>
                    <li>GraphQL</li>
                    <li>Amazon Web Services</li>
                </ul>
            </div>
            <div className="projects-container">
                Ongoing Projects
                <ul>
                    <li>Progress up: React-native/React</li>
                    <li>Family Pets: React-Native (IOS/Android) / React desktop</li>
                </ul>
            </div>
            <footer>
                <a href="mailto:bryan.schauerte@gmail.com">
                    Contact me for more info
                </a>
            </footer>
        </div>
    </article>
);

About.propTypes = {};

export default About;

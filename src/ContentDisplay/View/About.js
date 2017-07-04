import React from 'react';
import { PropTypes } from 'prop-types';

const About = () => (
    <article className="about-view">
        <header className="about-title">
            <h1 className="name">
                Bryan Schauerte
            </h1>
            <p className="sub-title">
                Software Engineer
            </p>
        </header>
        <div className="content">
            Currently Tinkering With
            <ul>
                <li>React</li>
                <li>Node</li>
                <li>Redux</li>
                <li>GraphQL</li>
                <li>Amazon Web Services</li>
            </ul>
        </div>
        <footer>
            email@gmail.com
        </footer>
    </article>
);

About.propTypes = {};

export default About;

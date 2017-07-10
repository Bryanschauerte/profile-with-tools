import React from 'react';
import { PropTypes } from 'prop-types';
import './BackgroundSVG.css';

const BackgroundSVG = ({ showSVGAnimation }) => {

    function _generateCircles(){

        let inputColorObj = {
            bottomLeft:'#062f4f',
            bottomRight:'#b82601',
            center:'#01b826',
            topCenter:'#0B1968',
            topLeft:'#0193b8',
            topRight: '#813772'
        };

        let topCenter = inputColorObj.topCenter;
        let topLeft = inputColorObj.topLeft;
        let topRight = inputColorObj.topRight;
        let bottomRight = inputColorObj.bottomRight;
        let bottomLeft = inputColorObj.bottomLeft;
        let internals = [];
        let combinedElements = [];

        //Top-Center
        for (var n = 1; n <= 5; n++){
            let temp = 10 * (n + 1);
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="50%"
                    cy="30%"
                    r={temp}
                    fillOpacity=".2"
                    fill={topCenter}
                    className={showSVGAnimation ? 'animate-svg' : null} />);
        }

        // Top-Left
        for (var i = 1; i <= 5; i++){
            let temp = i * 10;
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="15"
                    cy="20%"
                    r={temp}
                    fillOpacity=".2"
                    fill={topLeft}
                    className={showSVGAnimation ? 'animate-svg' : null} />);
        }

        // Top-Right
        for (var j = 1; j <= 5; j++){
            let temp = j * 10;
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="100%"
                    cy="20%"
                    r={temp}
                    fillOpacity=".1"
                    fill={topRight}
                    className={showSVGAnimation ? 'animate-svg' : null}  />);
        }

        // Bottom-Right
        for (var k = 1; k <= 5; k++){
            let temp = k * 10;
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="100%"
                    cy="100%"
                    r={temp}
                    fillOpacity=".1"
                    fill={bottomRight}
                    className={showSVGAnimation ? 'animate-svg' : null} />);
        }

        // Bottom-Left
        for (var m = 1; m <= 5; m++){
            let temp = m * 10;
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="0%"
                    cy="100%"
                    r={temp}
                    fillOpacity=".1"
                    fill={bottomLeft}
                    className={showSVGAnimation ? 'animate-svg' : null} />);
        }

        // Bottom-center

        for (var bc = 1; bc <= 5; bc++){
            let temp = bc * 10;
            temp += '%';
            internals.push(
                <circle
                    key={Math.random()}
                    cx="50%"
                    cy="70%"
                    r={temp}
                    fillOpacity=".1"
                    fill={bottomLeft}
                    className={showSVGAnimation ? 'animate-svg' : null} />);
        }

        combinedElements.push(
            <svg
                key={Math.random()}
                id="TopSVGCirles"
                height="100%"
                width="100%">
                {internals}
            </svg>
        );

        return <div className="svg-background">{combinedElements}</div>;

    }


    return _generateCircles();
};

BackgroundSVG.propTypes = {
    showSVGAnimation: PropTypes.bool
};

export default BackgroundSVG;

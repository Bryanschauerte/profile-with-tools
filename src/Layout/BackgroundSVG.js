import React from 'react';
import { PropTypes } from 'prop-types';

const BackgroundSVG = ({ showSVGAnimation }) => {

    function _generateCircles(){

        let inputColorObj = {
            center:'#01b826',
            topCenter:'#0B1968',
            topLeft:'#0193b8',
            topRight: '#813772',
            bottomRight:'#b82601',
            bottomLeft:'#062f4f'
        };

        let center = inputColorObj.center;
        let topCenter = inputColorObj.topCenter;
        let topLeft = inputColorObj.topLeft;
        let topRight = inputColorObj.topRight;
        let bottomRight = inputColorObj.bottomRight;
        let bottomLeft = inputColorObj.bottomLeft;
        let internals = [];
        let combinedElements = [];

        //center
        // for (var l = 1; l <= 5; l++){
        //     let temp = l * 10;
        //     temp += '%';
        //     internals.push(
        //         <circle
        //             key={Math.random()}
        //             cx="50%"
        //             cy="50%"
        //             r={temp} fillOpacity=".3"
        //             fill={center}
        //             className={showSVGAnimation ? 'SVGCcenter' : null} />);
        // }

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
                    className={showSVGAnimation ? 'SVGCtopCenter' : null} />);
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
                    className={showSVGAnimation ? 'SVGtopLeft' : null} />);
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
                    className={showSVGAnimation ? 'SVGtopRight' : null}  />);
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
                    className={showSVGAnimation ? 'SVGbottomRight' : null} />);
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
                    className={showSVGAnimation ? 'SVGbottomLeft' : null} />);
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
                    className={showSVGAnimation ? 'SVGbottomLeft' : null} />);
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

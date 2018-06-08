import React, { Component } from 'react';
// import OpenEye from '../img/eyelidslant.png';
import Feed from './Feed';
import InvisFace from "../img/scaryface.png";
import Circle from "../img/circle.png";

import '../css/EyeTrack.css';

class EyeTrack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            height: 0,
        };
        this.handleEyeTrack = this.handleEyeTrack.bind(this);
    }

    handleEyeTrack = (e) => {
        const flickerHeight = this.flickerElement.clientHeight;
        const flickerWidth = this.flickerElement.clientWidth;
        const flickerBox = document.getElementById("flicker-eyes");
        const flickerCenter = [flickerBox.offsetLeft + ((flickerWidth / 2) + 14), flickerBox.offsetTop + (flickerHeight + 28)];
        const flickerAngle = Math.atan2(e.screenX - flickerCenter[0], - (e.screenY - flickerCenter[1])) * (180 / Math.PI);
        document.documentElement.style.setProperty('--secondAngle', flickerAngle + 'deg');
    }

    render() {
        return (
            <div className="track-layer" onMouseMove={this.handleEyeTrack.bind(this)}>
                <img src={Circle} alt="circle" className="circle-eyes" draggable="false" />
                <img src={InvisFace} alt="human face" id="flicker-eyes" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                <Feed />
            </div>
        );
    }
}

export default EyeTrack;
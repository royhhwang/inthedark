import React, { Component } from 'react';
// import Parallax from 'parallax-js';
// import OpenEye from '../img/eyelidslant.png';
import Eyes from '../img/whiteeye2.png';
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
        const flickerBox = document.getElementById("flickering");
        const flickerCenter = [flickerBox.offsetLeft + ((flickerWidth / 2) + 14), flickerBox.offsetTop + (flickerHeight + 28)];
        const flickerAngle = Math.atan2(e.screenX - flickerCenter[0], - (e.screenY - flickerCenter[1])) * (180 / Math.PI);
        document.documentElement.style.setProperty('--secondAngle', flickerAngle + 'deg');
    }

    render() {
        return (
            <div className="monster-layer" onMouseMove={this.handleEyeTrack.bind(this)}>
                <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye1" draggable=" false" ref={(flickerElement) => this.flickerElement = flickerElement} />
            </div>
        );
    }
}

export default EyeTrack;
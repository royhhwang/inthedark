import React, { Component } from 'react';
import Feed from './Feed';
import InvisEye from "../img/eye.png";
import ShadowEye from "../img/shadoweye.png";
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
        const flickerCenter = [flickerBox.offsetLeft + ((flickerWidth / 2)), flickerBox.offsetTop + (flickerHeight + 28)];
        const flickerAngle = Math.atan2(e.screenX - flickerCenter[0], - (e.screenY - flickerCenter[1])) * (180 / Math.PI);
        const shadowAngle = flickerAngle;
        
        
        document.documentElement.style.setProperty('--secondAngle', flickerAngle + 'deg');
        document.documentElement.style.setProperty('--thirdAngle', shadowAngle + 'deg');
    }

    render() {
        return (
            <div className="track-layer" onMouseMove={this.handleEyeTrack.bind(this)}>
                <img src={InvisEye} alt="human face" id="flicker-eyes" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                <div className="blink-layer top-eyelid"><p>&nbsp;</p></div>
                <div className="blink-layer bottom-eyelid"><p>&nbsp;</p></div>
                <img src={InvisEye} alt="human face" className="shadow-eyes eye1" draggable="false" />
                <img src={ShadowEye} alt="human face" className="shadow-eyes eye2" draggable="false" />
                <img src={InvisEye} alt="human face" className="shadow-eyes eye3" draggable="false" />
                
                <Feed />
            </div>
        );
    }
}

export default EyeTrack;
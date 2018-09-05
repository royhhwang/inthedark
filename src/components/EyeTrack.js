import React, { Component } from 'react';
import Feed from './Feed';
import Footer from './Footer';
import InvisEye from "../img/eye.png";
import '../css/EyeTrack.css';

class EyeTrack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        };
        this.handleEyeTrack = this.handleEyeTrack.bind(this);
    }

    handleEyeTrack = (e) => {
        const flickerHeight = this.flickerElement.clientHeight;
        const flickerWidth = this.flickerElement.clientWidth;
        const flickerBox = document.getElementById("flicker-eyes");
        const flickerCenter = [flickerBox.offsetLeft + (flickerWidth - 40), flickerBox.offsetTop + (flickerHeight + 40)];
        const flickerAngle = Math.atan2(e.screenX - flickerCenter[0], - (e.screenY - flickerCenter[1])) * (180 / Math.PI);
        
        document.documentElement.style.setProperty('--secondAngle', flickerAngle + 'deg');
    }

    render() {
        return (
            <div className="track-layer" onMouseMove={this.handleEyeTrack.bind(this)}>
                <img src={InvisEye} alt="human face" id="flicker-eyes" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                <div className="blink-layer top-eyelid"><p>&nbsp;</p></div>
                <div className="blink-layer bottom-eyelid"><p>&nbsp;</p></div>
                
                <Feed />
                <Footer />
            </div>
        );
    }
}

export default EyeTrack;
import React, { Component } from 'react';
import Parallax from 'parallax-js';
import OpenEye from '../img/eyelidslant.png';
import Eyes from '../img/whiteeye2.png';
// import RealEye from '../img/eye.png';
import Hallway from '../img/hallway.jpg';
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

    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }

    componentWillUnmount() {
        this.parallax.disable();
    }

    handleEyeTrack = (e) => {
        const divHeight = this.divElement.clientHeight;
        const divWidth = this.divElement.clientWidth;
        const imgBox = document.getElementById("eye-move");
        const imgCenter = [imgBox.offsetLeft + ((divWidth / 2) + 14), imgBox.offsetTop + (divHeight + 28)];

        this.setState({ divHeight });

        const angle = Math.atan2(e.screenX - imgCenter[0], - (e.screenY - imgCenter[1])) * (180 / Math.PI);
        const degree = (Math.PI / 180) / (Math.PI / 50);
        const imgShift = ((Math.abs(angle) * (-1)) * degree);
        const imgGrow = [e.screenX - imgCenter[0], e.screenY - imgCenter[1]];
        const imgScale = (Math.sqrt(Math.pow(imgGrow[0], 2) + Math.pow(imgGrow[1], 2))) / 100;
        const inverseScale = (1 / imgScale) + 0.4;
        document.documentElement.style.setProperty('--imgAngle', angle + 'deg');
        document.documentElement.style.setProperty('--imgTranslate', imgShift + 'px');
        document.documentElement.style.setProperty('--imgScale', inverseScale);

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
                <div ref={el => this.scene = el}>
                    <div data-depth="0.2">
                        <img src={Hallway} alt="dark hallway" draggable="false"></img>
                    </div>
                    <div data-depth="0.8">
                        <img src={OpenEye} alt="spooky monster" id="eye-shell" draggable="false"></img>
                        <img src={Eyes} alt="pupil" id="eye-move" draggable="false" ref={(divElement) => this.divElement = divElement} />
                    </div>
                    <div data-depth="0.2">
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye1" draggable=" false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye2" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye3" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EyeTrack;
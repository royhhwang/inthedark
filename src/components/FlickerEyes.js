import React, { Component } from 'react';
import Parallax from 'parallax-js';
import Eyes from '../img/whiteeye2.png';
import '../css/FlickerEyes.css';

class FlickerEyes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            height: 0
        };
        this.handleEyeFlicker = this.handleEyeFlicker.bind(this);
    }

    handleEyeFlicker = (e) => {
        const flickerHeight = this.flickerElement.clientHeight;
        const flickerWidth = this.flickerElement.clientWidth;

        const flickerBox = document.getElementById("flicker-eye");
        const flickerCenter = [flickerBox.offsetLeft + ((flickerWidth / 2)), flickerBox.offsetTop + (flickerHeight)];

        this.setState({ flickerHeight });

        const flickerAngle = Math.atan2(e.screenX - flickerCenter[0], - (e.screenY - flickerCenter[1])) * (180 / Math.PI);

        document.documentElement.style.setProperty('--flickerAngle', flickerAngle + 'deg');
    }

    render() {

        return (
            <div class="flicker-layer" onMouseMove={this.handleEyeFlicker.bind(this)}>
                <div>
                    <img src={Eyes} alt="pupil" id="flicker-eye" ref={(flickerElement) => this.flickerElement = flickerElement} />
                </div>
            </div>
        );
    }
}

export default FlickerEyes;
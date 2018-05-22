import React, { Component } from 'react';
import Parallax from 'parallax-js';
import OpenEye from '../img/whiteeye.png';
import Eyes from '../img/whiteeye2.png';
import '../css/EyeTrack.css';

class EyeTrack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            height: 0
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
        const imgCenter = [imgBox.offsetLeft + ((divWidth / 2)), imgBox.offsetTop + (divHeight + 20)];

        this.setState({ divHeight });

        const angle = Math.atan2(e.screenX - imgCenter[0], - (e.screenY - imgCenter[1])) * (180 / Math.PI);
        const degree = (Math.PI / 180) / (Math.PI / 50);
        const imgShift = ((Math.abs(angle) * (-1)) * degree);

        document.documentElement.style.setProperty('--imgAngle', angle + 'deg');
        document.documentElement.style.setProperty('--imgTranslate', imgShift + 'px');
    }

    render() {

        return (
            <div className="eye-layer" onMouseMove={this.handleEyeTrack.bind(this)}>
                <div ref={el => this.scene = el}>
                    <div data-depth="1" id="invisibility">
                        <img src={OpenEye} alt="spooky monster" id="eye-shell"></img>
                        <img src={Eyes} alt="pupil" id="eye-move" ref={(divElement) => this.divElement = divElement} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EyeTrack;
import React, { Component } from "react";
import Parallax from 'parallax-js';
import Spotlight from '../img/spotlight.png';
import Teddy from '../img/teddybear.png';
import SpookyNeo from '../img/bear.png';
import '../css/ParaBackground.css';

class ParaBackground extends Component {

    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }

    componentWillUnmount() {
        this.parallax.disable();
    }

    render() {
        return (
            <ul ref={el => this.scene = el} className="para-layer">
                <li data-depth="0.3">
                    <div className="para-absolute">
                        <img src={Spotlight} className="spotlight flicker" alt="hallway spotlight"></img>
                        <img src={Teddy} className="teddybear flicker" alt="dark teddy bear"></img>
                        <img src={SpookyNeo} className="spooky-neo flicker2" alt="spooky neo face"></img>
                    </div>
                </li>
            </ul>
        )
    }
}

export default ParaBackground;
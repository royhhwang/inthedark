import React, { Component } from "react";
import Parallax from 'parallax-js';
import Spotlight from '../img/spotlight.png';
import SpookyRoy from '../img/spookyme.png';
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
                <li data-depth="0.1">
                    <img src={Spotlight} className="spotlight flicker" alt="hallway spotlight"></img>
                </li>
                <li data-depth="0.2">
                    <img src={SpookyRoy} className="hand-layer flicker2" alt="spotlight monster" />
                </li>
            </ul>
        )
    }
}

export default ParaBackground;
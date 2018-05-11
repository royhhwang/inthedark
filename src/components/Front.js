import React, { Component } from 'react';
import Parallax from 'parallax-js';
import HandPic from '../img/hand2.png';
import Lights2 from '../img/bottomlight.png';
import Monster from '../img/eyes.png';

import './Front.css';

class Front extends Component {

    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }
    componentWillUnmount() {
        this.parallax.disable();
    }

    render() {
        return (
            <div>
                <div ref={el => this.scene = el}>
                    <div data-depth="0.2" id="media-pref">
                        <img src={HandPic} alt="corridor" class="front-layer"></img>
                        <div>
                            <img src={Lights2} alt="lights" class="lights-layer"></img>
                        </div>
                    </div>
                    <div data-depth="0.5" id="media-monster">
                        <img src={Monster} alt="spooky monster" class="monster-layer"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;
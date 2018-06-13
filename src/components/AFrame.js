import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import '../css/AFrame.css';
import 'aframe-animation-component';
import Ground from '../img/blackwp.jpg';
import Sky from '../img/sky.JPG';
// import BadGuy from '../img/bear.png';

class AFrame extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }

    render() {
        return (
            <Scene>
                <a-assets>
                    <img id="ground-texture" src={Ground} alt="black texture" />
                    <img id="sky-texture" src={Sky} alt="blue clouds" />
                </a-assets>

                <Entity primitive="a-plane" src="#ground-texture" rotation="-90 0 0" height="100" width="100" />
                <Entity primitive="a-light" type="ambient" color="#445451" />
                <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
                <Entity primitive="a-sky" height="2048" radius="30" src="#sky-texture" theta-length="90" width="2048" />
                <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
                <Entity text={{ value: 'Environment WIP', align: 'center' }} position={{ x: 0, y: 2, z: -1 }} />

                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: "white" }}
                    position={{ x: 0, y: 1, z: -3 }}>
                </Entity>
            </Scene>
        );
    }
}


export default AFrame;
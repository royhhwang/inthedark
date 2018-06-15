import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import '../css/AFrame.css';
import 'aframe-animation-component';
import Sky from '../img/sky.jpg';

class AFrame extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }

    render() {
        return (
            <Scene>
                <a-assets>
                    <img id="sky-texture" src={Sky} alt="dark sky" />
                </a-assets>

                <Entity primitive="a-plane" color="#833535" rotation="-90 0 0" height="100" width="100" repeat="100 10"/>
                <Entity primitive="a-light" type="ambient" color="#445451" />
                <Entity primitive="a-light" type="spot" intensity="1" position="0 2 1" angle="45" />
                <Entity primitive="a-sky" height="2048" radius="30" src="#sky-texture" theta-length="90" width="2048" />
                <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />

                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: -2.5, y: 2.5, z: -8 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                >
                </Entity>
                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 2.5, y: 2.5, z: -8 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                >
                </Entity>
                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 0, y: 2.5, z: -10 }}
                    scale={{ x: 5, y: 5, z: 1 }}
                >
                </Entity>
            </Scene>
        );
    }
}


export default AFrame;
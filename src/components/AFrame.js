import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import 'aframe-animation-component';
import Sky from '../img/sky.jpg';
import '../css/AFrame.css';

class AFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#EC3939"
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange = () => {
        this.setState({ color: 'blue' });
    }

    render() {

        return (
            <Scene>
                <a-assets>
                    <img id="sky-texture" src={Sky} alt="dark sky" />
                </a-assets>

                <Entity primitive="a-plane" color="#833535" rotation="-90 0 0" height="100" width="100" repeat="100 10" />
                <Entity primitive="a-light" type="ambient" color="#445451" />
                <Entity primitive="a-light" type="spot" intensity="1" position="0 2 1" angle="45" />
                <Entity primitive="a-sky" height="2048" radius="30" src="#sky-texture" theta-length="90" width="2048" />
                <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />

                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: -2.5, y: 2.5, z: -8 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                />
                <Entity id="box1"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 2.5, y: 2.5, z: -8 }}
                    scale={{ x: 1, y: 5, z: 5 }}
                />
                <Entity id="box2"
                    geometry={{ primitive: 'box' }}
                    material={{ color: 'black' }}
                    position={{ x: 0, y: 2.5, z: -10 }}
                    scale={{ x: 5, y: 5, z: 1 }}
                />
                <Entity id="sphere" class="collidable"
                    geometry={{ primitive: 'sphere' }}
                    material={{ color: this.state.color }}
                    position={{ x: 0, y: 1, z: -8 }}
                    scale={{ x: 1, y: 1, z: 1 }}
                />
            </Scene>
        );
    }
}


export default AFrame;
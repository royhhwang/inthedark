import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import '../css/AFrame.css';

class AFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        console.log("Clicked");
    }

    handleCollide = () => {
        console.log("Collided");
    }

    render() {
        return (
            <Scene>
                <Entity geometry={{ primitive: 'box' }} material={{ color: 'blue' }} position={{ x: 0, y: 2, z: -5 }} />
                <Entity particle-system={{ preset: 'snow' }} />
                <Entity light={{ type: 'point' }} />
                <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
                <Entity text={{ value: 'Hello, WebVR!', opacity: 1 }} />
                <Entity events={{
                    click: this.handleClick,
                    collided: [this.handleCollide]
                }} />
            </Scene>
        )
    }
}

export default AFrame;
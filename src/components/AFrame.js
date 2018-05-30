import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

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
                <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
                <Entity particle-system={{ preset: 'snow' }} />
                <Entity light={{ type: 'point' }} />
                <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
                <Entity text={{ value: 'Hello, WebVR!' }} />
                <Entity events={{
                    click: this.handleClick,
                    collided: [this.handleCollide]
                }} />
            </Scene>
        )
    }
}

export default AFrame;
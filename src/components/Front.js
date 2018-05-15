import React, { Component } from 'react';
import Parallax from 'parallax-js';
import Monster from '../img/eyes.png';
import { Row, Col } from 'react-materialize';

import './Front.css';

class Front extends Component {
    constructor(props) {
        super(props);

        this.state = { x: 0, y: 0 };
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }
    componentWillUnmount() {
        this.parallax.disable();
    }

    onMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
        const x = e.screenX || e.touches[0].screenX;
        const y = e.screenY || e.touches[0].screenY;
        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');

    }

    render() {

        return (
            <div>
                <div className="mouse-coord" onMouseMove={this.onMouseMove.bind(this)} >
                    <div ref={el => this.scene = el}>
                        <div data-depth="0.2" id="media-monster">
                            <img src={Monster} alt="spooky monster" className="monster-layer"></img>
                        </div>
                    </div>
                    <Row>
                        <Col className="s12 block1">
                            <h1>Spooky</h1>
                            <h3>List of Spooky Games</h3>
                            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis faucibus dui eget ornare. In hac habitasse platea dictumst. Curabitur ultrices vulputate leo ut convallis. Suspendisse porttitor lacus nec libero aliquet, vitae interdum nibh scelerisque. Donec convallis orci eu bibendum scelerisque. Duis non diam eros. Morbi vel lectus elementum, tincidunt nulla ultrices, pulvinar est. Nullam volutpat ex id venenatis semper. Aliquam tempus, urna eu consectetur ultricies, diam nisi iaculis nisi, eu pharetra dui tortor sed tellus. Nullam dictum dolor a lacus semper, eu rhoncus sem consectetur. Curabitur a tortor lorem. Mauris dignissim in tellus vitae aliquet. Cras ipsum augue, porta ullamcorper euismod nec, suscipit eu dui. Phasellus sagittis faucibus velit eget feugiat. Etiam aliquam elit erat, vitae placerat massa eleifend in. Donec sed tempus enim.</p>
                        </Col>
                    </Row>
                    <Col>
                        <p>hello world</p>
                    </Col>
                    <Row>
                        <Col>
                            <p>hello world</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>hello world</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>hello world</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Front;
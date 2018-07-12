import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import EyeTrack from './EyeTrack';
import Flashlight from './Flashlight';
import Preloader from './Preloader';
import Focus from './Focus';
import '../css/Front.css';

class Front extends Component {
    constructor(props) {
        super(props);

        this.state = {
            window: false
        };
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    onMouseMove = (e) => {

        const x = e.screenX;
        const y = e.screenY;

        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
    }

    render() {
        return (
            <div>
                <Preloader />
                <div className="mouse-coord" onMouseMove={this.onMouseMove.bind(this)} >
                    <Row>
                        <Col className="s12">
                            <EyeTrack />
                            <Flashlight />
                            <Focus />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Front;
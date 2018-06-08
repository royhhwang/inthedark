import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Flashlight from './Flashlight';
// import Preloader from './Preloader';
import '../css/Front.css';

class Front extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
        };
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    onMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });

        const x = e.screenX;
        const y = e.screenY;

        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
    }

    render() {
        return (
            <div>
                {/* <Preloader /> */}
                <div className="mouse-coord" onMouseMove={this.onMouseMove.bind(this)} >
                    <Row>
                        <Col className="s12">
                            <Flashlight />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Front;
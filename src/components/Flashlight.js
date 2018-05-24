import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Lightswitch from '../img/lightswitch.png';
import '../css/Flashlight.css';

class Flashlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lights: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({ lights: !this.state.lights });
        this.setState({ monster: !this.state.monster });

        if (this.state.lights === false) {
            document.documentElement.style.setProperty('--lights', 0);
        }
        else {
            document.documentElement.style.setProperty('--lights', 'radial-gradient( circle 25vmax at var(--cursorX) var(--cursorY), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.35) 90%, rgba(0, 0, 0, 0.99) 100%)');
        }
    }

    render() {

        const flipSwitch = this.state.lights ? 'flip-up' : 'flip-down';

        return (
            <Row>
                <Col className="s12 light-layer">
                    <img src={Lightswitch} className={flipSwitch + ' light-switch'} draggable="false" onClick={this.handleClick} alt="lightswitch"></img>
                </Col>
            </Row>
        )
    }
}

export default Flashlight;

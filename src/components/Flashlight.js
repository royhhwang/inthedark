import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";
import Lightswitch from '../img/lightswitch.png';
import '../css/Flashlight.css';

class Flashlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lights: false,
            visible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({ lights: !this.state.lights });
        this.setState({ visible: !this.state.visible });

        if (this.state.lights === false) {
            document.documentElement.style.setProperty('--lights', 0);
        }
        else {
            document.documentElement.style.setProperty('--lights', 'radial-gradient( circle 50vmax at var(--cursorX) var(--cursorY), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.92) 50%)');
        }
    }

    render() {

        const flipSwitch = this.state.lights ? 'flip-up' : 'flip-down';
        const pageAccess = this.state.visible ? 'no-access' : 'yes-access';
        const allowAccess = this.state.visible ? 'yes-allow' : 'no-allow';

        return (
            <Row>
                <Col className="s12">
                    <img src={Lightswitch} className={flipSwitch + ' light-switch'} draggable="false" onClick={this.handleClick} alt="lightswitch"></img>
                </Col>
                <Col className={pageAccess + " s12 white-font"}>
                    <div className="light-text">Hit the lights</div>
                    <div className="light-text" id="title-glitch3">Hit the lights</div>
                    <div className="light-text" id="title-glitch4">Hit the lights</div>
                </Col>
                <Col className={allowAccess + " s12 light-text white-font welcome-text"}>
                    <a className={window.location.pathname === "/aframe" ? "active" : ""}>
                        <Link to="/aframe">Welcome</Link>
                    </a>
                </Col>
            </Row>
        )
    }
}

export default Flashlight;

import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Lightswitch from '../img/lightswitch.png';
import Parallax from 'parallax-js';
import Eyes from '../img/eyes.png';
import '../css/Flashlight.css';

class Flashlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lights: false,
            monster: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }

    componentWillUnmount() {
        this.parallax.disable();
    }

    handleClick = () => {

        this.setState({ lights: !this.state.lights });
        this.setState({ monster: !this.state.monster });

        if (this.state.lights === false) {
            document.documentElement.style.setProperty('--lights', 0);
        }
        else {
            document.documentElement.style.setProperty('--lights', 'radial-gradient( circle 15vmax at var(--cursorX) var(--cursorY), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.35) 90%, rgba(0, 0, 0, 0.99) 100%)');
        }
    };

    render() {

        const flipSwitch = this.state.lights ? 'flip-up' : 'flip-down';
        const visibleMonster = this.state.monster ? 'visible-monster' : 'invisible-monster';

        return (
            <Row>
                <Col className="s12">
                    <div ref={el => this.scene = el} className="block">
                        <div data-depth="0.2" id="media-monster">
                            <img src={Eyes} alt="spooky monster" className={visibleMonster + ' monster-layer'}></img>
                        </div>
                        {/* <div data-depth="0.4">
                            <img src={Eyes} alt="smoke ring" className="smoke-layer"></img>
                        </div> */}
                    </div>
                </Col>
                <Col className="s12 light-switch">
                    <h1 className="block1">In the Dark</h1>
                    <img src={Lightswitch} className={flipSwitch} onClick={this.handleClick} alt="lightswitch"></img>
                </Col>
            </Row>
        )
    }
}

export default Flashlight;

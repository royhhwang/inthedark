import React, { Component } from 'react';
import Cellphone from '../img/cellphone.png';
import Ring from '../img/ring.png';
import "../css/Preloader.css";

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            reveal: true,
            layer: true,
            glitch: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ reveal: false }), 0);
        setTimeout(() => this.setState({ visible: false }), 3000);
        setTimeout(() => this.setState({ glitch: false }), 6000);
        setTimeout(() => this.setState({ layer: false }), 8000);
    }

    render() {

        const cellReveal = this.state.reveal ? 'cell-invisible' : 'cell-visible'
        const cellFlip = this.state.visible ? 'cell-call' : 'cell-receive'
        const cellGlitch = this.state.glitch ? 'cell-normal' : 'cell-glitch'
        const cellDisappear = this.state.layer ? 'layer-visible' : 'layer-fade'

        return (
            <div className={cellDisappear + " cell-layer"}>
                <div className={cellReveal} id="cell-center">
                    <div id="cell-absolute">
                        <img src={Cellphone} className="glitch-box + cell-image" alt="cellphone" />
                        <img src={Cellphone} className="glitch-box + cell-image" alt="cellphone" />
                        <img src={Cellphone} className="glitch-box + cell-image" alt="cellphone" />
                        <img src={Cellphone} className="glitch-box + cell-image" alt="cellphone" />
                        <img src={Cellphone} className="glitch-box + cell-image" alt="cellphone" />
                        <div className={cellFlip} id="cell-screen">
                            <img src={Ring} className="ring-glitch" id="ring-screen" alt="glitched ring"></img>
                            <img src={Ring} id="ring-screen2" alt="glitched ring"></img>
                            <img src={Ring} className="ring-glitch" id="ring-screen3" alt="glitched ring"></img>
                        </div>
                        <div className={cellGlitch}>
                            <img src={Ring} id="ring-screen2" alt="glitched ring"></img>
                            <img src={Cellphone} alt="cellphone" id="cell-image2" />
                            <div className={cellFlip} id="cell-screen2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preloader;
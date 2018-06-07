
    componentDidMount() {
        this.parallax = new Parallax(this.scene);
    }

    componentWillUnmount() {
        this.parallax.disable();
    }
<div ref={el => this.scene = el}>
                    <div data-depth="0.1">
                        <img src={Window} id="window-bg" alt="dark window" draggable="false"></img>
                    </div>
                    {/* <div data-depth="0.8">
                        <img src={OpenEye} alt="spooky monster" id="eye-shell" draggable="false"></img>
                        <img src={Eyes} alt="pupil" id="eye-move" draggable="false" ref={(divElement) => this.divElement = divElement} />
                    </div> */}
                    <div data-depth="0.2">
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye1" draggable=" false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye2" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                        <img src={Eyes} alt="human eye" id="flickering" className="flicker-eyes eye3" draggable="false" ref={(flickerElement) => this.flickerElement = flickerElement} />
                    </div>
                </div>
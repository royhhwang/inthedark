import React from 'react';
import { Row, Col } from 'react-materialize';
import ParaBackground from './ParaBackground';
import '../css/Feed.css';

const Feed = () => (
    <div className="feed-layer">
        <Row>
            <Col className="s12">
                <div className="title-block">
                    <div className="feed-block">
                        <h1 className="block1" id="title-glitch1">In the Dark</h1>
                        <h1 className="block1" id="title-glitch2">In the Dark</h1>
                        <h1>In the Dark</h1>
                    </div>
                </div>
            </Col>
            <Col className="s12">
                <ParaBackground />
            </Col>
        </Row>
    </div>
);

export default Feed;
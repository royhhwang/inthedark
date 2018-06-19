import React, { Component } from 'react'
import axios from 'axios';
import {Row, Col} from 'react-materialize';
import '../css/Focus.css';

const API_KEY = process.env.REACT_APP_API_CODE;
const API_URL = 'https://itch.io/api/1/';

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    axios.get(API_URL + API_KEY + '\n/my-games')
    .then(({ data }) => {
        this.setState({
          results: data.games
        })
        console.log(this.state.results);
      })
    }
  

  render() {

    const picSrc = this.state.results;
    const itchData = picSrc.map((pic) => (
        <Col className="s4">
          <div key={pic.id} className="focus-data">
            <p>{pic.title}</p>
            <a href={pic.url}><img src={pic.cover_url} alt="game placeholder" className="focus-images" /></a>
          </div>
        </Col>
      )
    )
    return (
      <Row className="focus-layer">
        <Col className="s12 focus-fill">
        <h1 className="focus-title">Game Portfolio</h1>
          {itchData}
        </Col>
      </Row>
    )
  }
}

export default Focus;
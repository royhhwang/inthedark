import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import '../css/Focus.css';

const IGDB_KEY = process.env.REACT_APP_IGDB_API;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api-endpoint.igdb.com/games/?search=freddy,popularity&order=popularity:desc&limit=6&fields=*';


class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    axios.get(proxyUrl + targetUrl, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "user-key": IGDB_KEY,
        'Accept': "application/json",
        'Content-Type': 'application/json'
      },
    })
      .then(({ data }) => {
        this.setState({
          results: data
        })
        console.log(this.state.results);
      })
      .catch((e) => {
        console.log("Error: ", e);
      })
  }

  render() {

    const picSrc = this.state.results;
    const itchData = picSrc.map((pic) => (
      <Col className="s2 focus-data" key={pic.id} >
        <div>
          <a href={pic.url}><img src={pic.cover.url} alt="game placeholder" className="focus-images" /></a>
          <p>{pic.name}</p>
        </div>
      </Col>
    ));
    return (
      <Row className="focus-layer">
        <Col className="s12 focus-fill">
          <h1 className="focus-title">Five Nights</h1>
          <Row>
            {itchData}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Focus;
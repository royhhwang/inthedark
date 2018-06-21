import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import '../css/Focus.css';

const API_KEY = process.env.REACT_APP_API_CODE;
const API_URL = 'https://itch.io/api/1/';
const IGDB_KEY = process.env.REACT_APP_IGDB_API;

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    axios.get("https://api-endpoint.igdb.com/games/1942?fields=*", {
      method: 'GET',
      mode: 'no-cors',
      withCredentials: true,
      credentials: 'same-origin',
      headers: {
        "user-key": IGDB_KEY,
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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
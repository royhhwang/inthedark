import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import Default from '../img/error.png';
import '../css/Focus.css';

const IGDB_KEY = process.env.REACT_APP_IGDB_API;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api-endpoint.igdb.com/games/?search=';
const searchParams = ',popularity&order=popularity:desc&limit=14&fields=*';

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'freddy',
      results: []
    }
  }

  componentDidMount() {
    this.handleApiSearch();
  }

  handleApiSearch = () => {

    const queryValue = this.state.query;
    const queryReplace = queryValue.replace(/ /g, '-');

    axios.get(proxyUrl + targetUrl + queryReplace + searchParams, {
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

  handleSearchValue = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 3) {
        this.handleApiSearch();
      }
      else {
        document.getElementById('empty-text').innerHTML = "Please enter more than 3 letters!";
      }
    }
    )
  }

  render() {

    const picSrc = this.state.results;
    const itchData = picSrc.map((pic) => {
      if (pic.cover !== undefined) {
        return (
          <Col className="s3 focus-data" key={pic.id} >
            <div>
              <a href={pic.url} target="_blank"><img src={pic.cover.url} alt={pic.name + " game"} className="focus-images" /></a>
              <p>{pic.name}</p>
            </div>
          </Col>
        )
      }
      else {
        return (
          <Col className="s3 focus-data" key={pic.id} >
            <div>
              <a href={pic.url} target="_blank"><img src={Default} alt={pic.name + " game"} className="focus-images" /></a>
              <p>{pic.name}</p>
            </div>
          </Col>
        )
      }
    });

    return (
      <Row className="focus-layer">
        <Col className="s12 focus-fill">
          <h1 className="focus-title">Games</h1>
          <form id="form-layer"
            onSubmit={this.handleSearchValue}
          >
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
            />
          </form>
          <div id="empty-text" />
          <Row>
            {itchData}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Focus;
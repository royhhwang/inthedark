import React, { Component } from 'react'
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-materialize';
import IdleSpinner from "./IdleSpinner";
import '../css/Focus.css';

const IGDB_KEY = process.env.REACT_APP_IGDB_API;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api-endpoint.igdb.com/games/?search=';
const searchParams = ',popularity&order=popularity:desc&limit=20&fields=*';

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'freddy',
      isLoading: true,
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
          results: data,
          isLoading: false,
        })
      })
      .catch((e) => {
        console.log("Error: ", e);
      })
  }

  handleSearchValue = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 2) {
        this.setState({ isLoading: true });
        this.handleApiSearch();
      }
      else {
        document.getElementById('empty-text').innerHTML = "Please enter at least 3 letters!";
      }
    }
    )
  }

  idleSpinner = (loading) => {
    if (this.state.isLoading === true) {
      return (
        <IdleSpinner />
      )
    }
    else {
      return (null);
    }
  }

  render() {

    const picSrc = this.state.results;
    const itchData = picSrc.map((pic) => {
      if (pic.themes !== undefined && pic.cover !== undefined) {
        if (pic.themes.find((theme) => { return theme === 19; })) {
          return (
            <Col className="s3 focus-data" key={pic.id} >
              <Fade bottom>
                <div className="focus-content">
                  <a href={pic.url} target="_blank"><img src={pic.cover.url} alt={pic.name + " game"} className="focus-images" /></a>
                  <p className="focus-font">{pic.name}</p>
                </div>
              </Fade>
            </Col>
          )
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    });

    return (
      <Row className="focus-layer" >
        <Col className="s12 focus-fill">
          <h1 className="focus-title">Horror Games</h1>
          <form id="form-layer"
            onSubmit={this.handleSearchValue}
          >
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
            />
            {this.idleSpinner()}
          </form>
          <div id="empty-text" />
          <Row>
            {itchData}
            <div className="fail-layer">Go ahead... Try again...</div>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Focus;
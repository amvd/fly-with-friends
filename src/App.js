import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapTracker from './maptracker.js';
import FlightsAnalyzer from './lib/flights-analyzer.js';
import rawFlights from './lib/raw-flights';

const API_URL = 'https://flights-api.azurewebsites.net/flights';

let flightsAnalyzer = undefined;

const USER_MODES = {
  SINGLE_USER: 0,
  MULTI_USER: 1
};

class App extends Component {
  constructor () {
    super();

    this.state = {
      origin1: null,
      origin2: null,
      loading: true,
      mode: USER_MODES.SINGLE_USER
    }
  }

  componentDidMount() {
    getFlightData().then(
      (rawData) => {
        const flightData = JSON.parse(rawData);
        flightsAnalyzer = new FlightsAnalyzer(flightData);
        console.log("created flightsAnalyzer", flightsAnalyzer)

        this.setState({
          flightData: flightData,
          loading: false
        })
      },
      (errorStatus, errorText) => {
        console.error("Unable to retrieve data from API. Loading local default data.")
        const flightData = rawFlights;
        flightsAnalyzer = new FlightsAnalyzer(flightData);
        console.log("created flightsAnalyzer", flightsAnalyzer)

        this.setState({
          flightData: flightData,
          loading: false
        })
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Fly With Friends</h1>
          <h3>Cheap roundtrip flights across North America</h3>
        </div>
        { this.renderMapTracker() }
        <div className="main-body">
          { this.renderModePicker() }
          <p className="App-intro">
            Origin: { this.state.origin1 && this.state.origin1.name }
          </p>
          <p>
            <button
              onClick={this.clearOrigin.bind(this, 'origin1')}
            >
              Clear Origin
            </button>
          </p>
        </div>
      </div>
    );
  }

  selectOrigin (originName, code) {
    this.setState({
      [originName]: code
    })
  }

  clearOrigin (originName) {
    this.setState({
      [originName]: undefined
    })
  }

  renderModePicker() {

  }

  renderMapTracker () {
    if (flightsAnalyzer) {
      return (
        <MapTracker
          userMode={this.state.mode}
          flightsAnalyzer={flightsAnalyzer}
          flightData={this.state.flightData}
          airportCodes={flightsAnalyzer.airportCodes}
          dealsForOrigin={this.dealsForOrigin}
          origin={this.state.origin1}
          selectOrigin={this.selectOrigin.bind(this)}
          clearOrigin={this.clearOrigin.bind(this, 'origin1')}
        />
      )
    } else {
      return (
        <div>
          LOADING...
        </div>
      )
    }
  }

  get dealsForOrigin () {
    if (!flightsAnalyzer || !this.state.origin1) {
      return []
    }
    return flightsAnalyzer.matchDeals(this.state.origin1.iata)
  }

  get citiesList () {
    if (!flightsAnalyzer) {
      return []
    } else {
      return flightsAnalyzer.citiesList
    }
  }
}

function getFlightData () {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest()
    request.open('GET', API_URL, true)
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText)
        } else {
          reject(request.status, request.statusText)
        }
      }
    }
    request.send(null)
  })
}

export default App;

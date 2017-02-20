import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapTracker from './maptracker.js';
import flightsAnalyzer from './lib/flights-server.js';

const cities = flightsAnalyzer.citiesList;

console.log(cities)

class App extends Component {
  constructor () {
    super();

    this.state = {
      origin1: null,
      origin2: null
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Fly With Friends</h1>
          <h3>Cheap roundtrip flights across North America</h3>
        </div>
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
        <MapTracker
          origin={this.state.origin1}
          selectOrigin={this.selectOrigin.bind(this)}
          clearOrigin={this.clearOrigin.bind(this, 'origin1')}
        />
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
}

export default App;

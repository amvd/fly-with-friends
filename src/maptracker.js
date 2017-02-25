import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import PlainMarker from './components/plain-marker';
import airports from './lib/airport-coordinates.js';
import ArcPolyline from './components/arc-polyline.js';

// const defaultAirport = airports['MCI'];
// const secondTestAirport = airports['OMA'];
// const thirdTestAirport = airports['ORD'];

class MapTracker extends Component {
  render() {
    /* eslint-disable */
    const position = typeof defaultAirport !== 'undefined' ? [defaultAirport.latitude, defaultAirport.longitude] : [39.895642, -97.118596];
    /* eslint-enable */
    // const position = ;
    const map = (
      <Map center={position} zoom={4}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        { this.generateDefaultMarkers() }
        { this.generateDealPaths() }
      </Map>
    );

    return map;
  }

  generateDealPaths () {
    const origin = this.props.origin;
    if (!origin) {
      return;
    }
    console.log(origin)
    const flightPaths = [];
    const originMarker = (
      <PlainMarker
        key={'origin-'+origin.iata}
        position={[origin.latitude, origin.longitude]}
        popupText={`${origin.name} (${origin.iata})`}
        clearOrigin={this.props.clearOrigin}
        cityName={origin.city}
      />
    )
    const destinationMarkers = [originMarker];
    const deals = this.props.dealsForOrigin;
    const startCoords = [origin.latitude, origin.longitude];

    for (let destination in deals) {
      if(!deals.hasOwnProperty(destination)) {
        continue;
      }
      const destinationAirport = airports[destination];
      const endCoords = [destinationAirport.latitude, destinationAirport.longitude];

      if (startCoords[0] === endCoords[0] && startCoords[1] === endCoords[1]) {
        continue;
      }

      const newPath = (
        <ArcPolyline
          key={destination}
          start={startCoords}
          end={endCoords}
          options={{
            vertices: 15
          }}
        />
      );

      flightPaths.push(newPath);

      const popupText = <div>
        <p>{destinationAirport.name}</p>
        <p><strong>
          Lowest Roundtrip: ${Number(deals[destination].lowestRoundTrip).toFixed(2)}
        </strong></p>
      </div>

      destinationMarkers.push(<PlainMarker
        key={'destination-'+destination}
        position={endCoords}
        popupText={popupText}
        cityName={destinationAirport.city}
        isDestination={true}
      />)
    }
    return flightPaths.concat(destinationMarkers);
  }


  generateAllFlightPaths () {
    const origin = this.props.origin;
    if (!origin) {
      // return this.generateDefaultPaths();
      return
    }
    const airportCodeList = this.props.airportCodes;
    const startCoords = [origin.latitude, origin.longitude];

    const lineCollection = [];

    let i = airportCodeList.length;
    while (i--) {
      if (airportCodeList[i] === origin.iata) {
        continue;
      }

      const airport = airports[airportCodeList[i]];

      const endCoords = [airport.latitude, airport.longitude];

      if (startCoords[0] === endCoords[0] && startCoords[1] === endCoords[1]) {
        continue;
      }

      const newLine = (
        <ArcPolyline
          key={airportCodeList[i]}
          start={startCoords}
          end={endCoords}
          options={{
            vertices: 15
          }}
        />
      );

      lineCollection.push(newLine);
    }

    return lineCollection;
  }

  generateDefaultPaths () {
    const defaultAirportCode = 'MCI';
    const defaultAirport = airports[defaultAirportCode];
    const airportCodeList = this.props.airportCodes.slice();
    const defaultCodeIndex = airportCodeList.indexOf(defaultAirportCode);
    if (defaultCodeIndex > -1) {
      airportCodeList.splice(defaultCodeIndex, 1)
    }

    // console.log(defaultAirport.iata)
    // let i = airportCodeList.length;
    // while (i--) {

    // }
    return airportCodeList.map((code) => {
      if (code === defaultAirport.iata) {
        return null;
      }
      const startCoords = [roundDecimal(defaultAirport.latitude), roundDecimal(defaultAirport.longitude)];
      const endCoords = [roundDecimal(airports[code].latitude), roundDecimal(airports[code].longitude)];
      // console.log(code, startCoords, endCoords)
      return <ArcPolyline
        key={code}
        start={startCoords}
        end={endCoords}
      />
    })

    function roundDecimal(number, places=5) {
      return Number(Math.round(number+`e${places}`)+`e-${places}`)
    }
  }

  generateDefaultMarkers () {
    if (this.props.origin || !this.props.airportCodes) {
      return
    }
    const markers = [];
    // for (let airportCode in airports) {
    //   if (!airports.hasOwnProperty(airportCode)) {
    //     continue;
    //   }
    //   const airport = airports[airportCode];

    //   const coords = [airport.latitude, airport.longitude];

    //   markers.push(
    //     <PlainMarker
    //       key={airportCode}
    //       position={coords}
    //       popupText={airport.name}
    //     />
    //   )
    // }
    const airportCodeList = this.props.airportCodes;

    let i = airportCodeList.length;
    while (i--) {
      const airportCode = airportCodeList[i];
      console.log("generating marker for:", airportCode)
      const airport = airports[airportCode];

      const coords = [airport.latitude, airport.longitude];

      markers.push(
        <PlainMarker
          key={airportCode}
          position={coords}
          popupText={airport.name}
          selectOrigin={this.props.selectOrigin.bind(null, 'origin1', airport)}
          cityName={airport.city}
        />
      )
    }
    return markers;
  }
}

export default MapTracker;

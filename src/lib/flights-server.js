import { rawFlights } from './raw-flights';
import FlightsAnalyzer from './flights-analyzer';

const flightsAnalyzer = new FlightsAnalyzer(rawFlights);

// let cities = flightsAnalyzer.citiesList();

// console.log(cities)

export default flightsAnalyzer;

const airports = {
  "DEN": {
    "name": "Denver International Airport",
    "iata": "DEN",
    "city": "Denver",
    "latitude": 39.861698150635,
    "longitude": -104.672996521
  },
  "MCO": {
    "name": "Orlando International Airport",
    "iata": "MCO",
    "city": "Orlando",
    "latitude": 28.429399490356445,
    "longitude": -81.30899810791016
  },
  "ORD": {
    "name": "Chicago O'Hare International Airport",
    "iata": "ORD",
    "city": "Chicago",
    "latitude": 41.97859955,
    "longitude": -87.90480042
  },
  "PHL": {
    "name": "Philadelphia International Airport",
    "iata": "PHL",
    "city": "Philadelphia",
    "latitude": 39.87189865112305,
    "longitude": -75.24109649658203
  },
  "TTN": {
    "name": "Trenton Mercer Airport",
    "iata": "TTN",
    "city": "Trenton",
    "latitude": 40.27669906616211,
    "longitude": -74.8134994506836
  },
  "CLE": {
    "name": "Cleveland Hopkins International Airport",
    "iata": "CLE",
    "city": "Cleveland",
    "latitude": 41.4117012024,
    "longitude": -81.8498001099
  },
  "CVG": {
    "name": "Cincinnati Northern Kentucky International Airport",
    "iata": "CVG",
    "city": "Cincinnati",
    "latitude": 39.0488014221,
    "longitude": -84.6678009033
  },
  "ATL": {
    "name": "Hartsfield Jackson Atlanta International Airport",
    "iata": "ATL",
    "city": "Atlanta",
    "latitude": 33.63669967651367,
    "longitude": -84.4281005859375
  },
  "AUS": {
    "name": "Austin Bergstrom International Airport",
    "iata": "AUS",
    "city": "Austin",
    "latitude": 30.194499969482422,
    "longitude": -97.6698989868164
  },
  "BNA": {
    "name": "Nashville International Airport",
    "iata": "BNA",
    "city": "Nashville",
    "latitude": 36.1245002746582,
    "longitude": -86.6781997680664
  },
  "CMH": {
    "name": "Port Columbus International Airport",
    "iata": "CMH",
    "city": "Columbus",
    "latitude": 39.99800109863281,
    "longitude": -82.89189910888672
  },
  "PIT": {
    "name": "Pittsburgh International Airport",
    "iata": "PIT",
    "city": "Pittsburgh",
    "latitude": 40.49150085,
    "longitude": -80.23290253
  },
  "SAT": {
    "name": "San Antonio International Airport",
    "iata": "SAT",
    "city": "San Antonio",
    "latitude": 29.533700942993164,
    "longitude": -98.46980285644531
  },
  "MCI": {
    "name": "Kansas City International Airport",
    "iata": "MCI",
    "city": "Kansas City",
    "latitude": 39.2976,
    "longitude": -94.713898
  },
  "PHX": {
    "name": "Phoenix Sky Harbor International Airport",
    "iata": "PHX",
    "city": "Phoenix",
    "latitude": 33.43429946899414,
    "longitude": -112.01200103759766
  },
  "MIA": {
    "name": "Miami International Airport",
    "iata": "MIA",
    "city": "Miami",
    "latitude": 25.79319953918457,
    "longitude": -80.29060363769531
  },
  "RSW": {
    "name": "Southwest Florida International Airport",
    "iata": "RSW",
    "city": "Fort Myers",
    "latitude": 26.53619956970215,
    "longitude": -81.75520324707031
  },
  "TPA": {
    "name": "Tampa International Airport",
    "iata": "TPA",
    "city": "Tampa",
    "latitude": 27.975500106811523,
    "longitude": -82.533203125
  },
  "LAS": {
    "name": "McCarran International Airport",
    "iata": "LAS",
    "city": "Las Vegas",
    "latitude": 36.08010101,
    "longitude": -115.1520004
  },
  "BIS": {
    "name": "Bismarck Municipal Airport",
    "iata": "BIS",
    "city": "Bismarck",
    "latitude": 46.772701263427734,
    "longitude": -100.74600219726562
  },
  "BZN": {
    "name": "Gallatin Field",
    "iata": "BZN",
    "city": "Bozeman",
    "latitude": 45.77750015,
    "longitude": -111.1529999
  },
  "CID": {
    "name": "The Eastern Iowa Airport",
    "iata": "CID",
    "city": "Cedar Rapids",
    "latitude": 41.884700775146484,
    "longitude": -91.71080017089844
  },
  "CLT": {
    "name": "Charlotte Douglas International Airport",
    "iata": "CLT",
    "city": "Charlotte",
    "latitude": 35.2140007019043,
    "longitude": -80.94309997558594
  },
  "COS": {
    "name": "City of Colorado Springs Municipal Airport",
    "iata": "COS",
    "city": "Colorado Springs",
    "latitude": 38.805801391602,
    "longitude": -104.70099639893
  },
  "DCA": {
    "name": "Ronald Reagan Washington National Airport",
    "iata": "DCA",
    "city": "Washington",
    "latitude": 38.8521,
    "longitude": -77.037697
  },
  "DFW": {
    "name": "Dallas Fort Worth International Airport",
    "iata": "DFW",
    "city": "Dallas-Fort Worth",
    "latitude": 32.89680099487305,
    "longitude": -97.03800201416016
  },
  "DSM": {
    "name": "Des Moines International Airport",
    "iata": "DSM",
    "city": "Des Moines",
    "latitude": 41.534000396728516,
    "longitude": -93.66310119628906
  },
  "DTW": {
    "name": "Detroit Metropolitan Wayne County Airport",
    "iata": "DTW",
    "city": "Detroit",
    "latitude": 42.212398529052734,
    "longitude": -83.35340118408203
  },
  "FLL": {
    "name": "Fort Lauderdale Hollywood International Airport",
    "iata": "FLL",
    "city": "Fort Lauderdale",
    "latitude": 26.072599411010742,
    "longitude": -80.15270233154297
  },
  "IAD": {
    "name": "Washington Dulles International Airport",
    "iata": "IAD",
    "city": "Washington",
    "latitude": 38.94449997,
    "longitude": -77.45580292
  },
  "IAH": {
    "name": "George Bush Intercontinental Houston Airport",
    "iata": "IAH",
    "city": "Houston",
    "latitude": 29.984399795532227,
    "longitude": -95.34140014648438
  },
  "IND": {
    "name": "Indianapolis International Airport",
    "iata": "IND",
    "city": "Indianapolis",
    "latitude": 39.7173,
    "longitude": -86.294403
  },
  "LAX": {
    "name": "Los Angeles International Airport",
    "iata": "LAX",
    "city": "Los Angeles",
    "latitude": 33.94250107,
    "longitude": -118.4079971
  },
  "LGA": {
    "name": "La Guardia Airport",
    "iata": "LGA",
    "city": "New York",
    "latitude": 40.77719879,
    "longitude": -73.87259674
  },
  "MKE": {
    "name": "General Mitchell International Airport",
    "iata": "MKE",
    "city": "Milwaukee",
    "latitude": 42.947200775146484,
    "longitude": -87.89659881591797
  },
  "PBI": {
    "name": "Palm Beach International Airport",
    "iata": "PBI",
    "city": "West Palm Beach",
    "latitude": 26.68320083618164,
    "longitude": -80.09559631347656
  },
  "PDX": {
    "name": "Portland International Airport",
    "iata": "PDX",
    "city": "Portland",
    "latitude": 45.58869934,
    "longitude": -122.5979996
  },
  "PGD": {
    "name": "Charlotte County Airport",
    "iata": "PGD",
    "city": "Punta Gorda",
    "latitude": 26.92020035,
    "longitude": -81.9905014
  },
  "RDU": {
    "name": "Raleigh Durham International Airport",
    "iata": "RDU",
    "city": "Raleigh-durham",
    "latitude": 35.877601623535156,
    "longitude": -78.7874984741211
  },
  "SFO": {
    "name": "San Francisco International Airport",
    "iata": "SFO",
    "city": "San Francisco",
    "latitude": 37.61899948120117,
    "longitude": -122.375
  },
  "STL": {
    "name": "Lambert St Louis International Airport",
    "iata": "STL",
    "city": "St. Louis",
    "latitude": 38.74869918823242,
    "longitude": -90.37000274658203
  },
  "SEA": {
    "name": "Seattle Tacoma International Airport",
    "iata": "SEA",
    "city": "Seattle",
    "latitude": 47.44900131225586,
    "longitude": -122.30899810791016
  },
  "FSD": {
    "name": "Joe Foss Field Airport",
    "iata": "FSD",
    "city": "Sioux Falls",
    "latitude": 43.582000732400004,
    "longitude": -96.741897583
  },
  "GSO": {
    "name": "Piedmont Triad International Airport",
    "iata": "GSO",
    "city": "Greensboro",
    "latitude": 36.097801208496094,
    "longitude": -79.93730163574219
  },
  "MEM": {
    "name": "Memphis International Airport",
    "iata": "MEM",
    "city": "Memphis",
    "latitude": 35.04240036010742,
    "longitude": -89.97669982910156
  },
  "MSN": {
    "name": "Dane County Regional Truax Field",
    "iata": "MSN",
    "city": "Madison",
    "latitude": 43.13990020751953,
    "longitude": -89.3375015258789
  },
  "MSP": {
    "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
    "iata": "MSP",
    "city": "Minneapolis",
    "latitude": 44.881999969499994,
    "longitude": -93.22180175780001
  },
  "MSY": {
    "name": "Louis Armstrong New Orleans International Airport",
    "iata": "MSY",
    "city": "New Orleans",
    "latitude": 29.99340057373047,
    "longitude": -90.25800323486328
  },
  "SAN": {
    "name": "San Diego International Airport",
    "iata": "SAN",
    "city": "San Diego",
    "latitude": 32.7336006165,
    "longitude": -117.190002441
  },
  "SLC": {
    "name": "Salt Lake City International Airport",
    "iata": "SLC",
    "city": "Salt Lake City",
    "latitude": 40.78839874267578,
    "longitude": -111.97799682617188
  },
  "SNA": {
    "name": "John Wayne Airport-Orange County Airport",
    "iata": "SNA",
    "city": "Santa Ana",
    "latitude": 33.67570114,
    "longitude": -117.8679962
  },
  "TYS": {
    "name": "McGhee Tyson Airport",
    "iata": "TYS",
    "city": "Knoxville",
    "latitude": 35.81100082,
    "longitude": -83.9940033
  },
  "OMA": {
    "name": "Eppley Airfield",
    "iata": "OMA",
    "city": "Omaha",
    "latitude": 41.303199768066406,
    "longitude": -95.89409637451172
  }
};

export default airports;

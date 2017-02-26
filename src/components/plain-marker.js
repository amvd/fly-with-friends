import React from 'react';
import * as L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import markerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
// import markerIcon2 from "../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize:  [41, 41]
});

function renderPopup(popupText, cityName, isDestination = false, selectOriginFunc = undefined, clearOriginFunc = undefined) {
  if (popupText) {
    let setOriginButton = null, linkToFrontier = null, clearOriginButton = null;

    if (selectOriginFunc) {
      setOriginButton = (
        <button
          onClick={selectOriginFunc}
        >
          Set As Origin
        </button>
      );
    }

    if (clearOriginFunc) {
      clearOriginButton = (
        <button
          onClick={clearOriginFunc}
        >
          Reset Origin Airport
        </button>
      )
    }

    if (isDestination) {
      linkToFrontier = <p>
        To see exact pricing and schedules, visit <a href={'https://www.flyfrontier.com/ways-to-save/online-deals/'} target='_blank'>Frontier's Deals Page</a>
      </p>
    }

    return <Popup>
      <span>
        <div>{ popupText }</div>
        <div>
          <strong>{cityName}</strong>
        </div>
        { setOriginButton }
        { clearOriginButton }
        { linkToFrontier }
      </span>
    </Popup>
  }
}

const PlainMarker = ({ position, popupText, cityName, selectOrigin, clearOrigin, isDestination }) => {
  return (<Marker position={position} icon={defaultIcon}>
    { renderPopup(popupText, cityName, isDestination, selectOrigin, clearOrigin) }
  </Marker>)
}

export default PlainMarker;

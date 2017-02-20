import React from 'react';
import * as L from 'leaflet';
import { Polyline } from 'react-leaflet';
import arc from 'arc';
/**
 * Transform L.LatLng to {x, y} object
 * @param {L.LatLng} latlng
 * @returns {{x: {number}, y: {number}}}
 * @private
 */
const _latLngToXY = latlng => ({
    x: latlng.lng,
    y: latlng.lat
});

/**
 * Create array of L.LatLng objects from line produced by arc.js
 * @param {object} line
 * @param {L.LatLng} from
 * @private
 * @returns {Array}
 */
function _createLatLngs(line, from) {
    if (line.geometries[0] && line.geometries[0].coords[0]) {
        /**
         * stores how many times arc is broken over 180 longitude
         * @type {number}
         */
        let wrap = from.lng - line.geometries[0].coords[0][0] - 360;

        return line.geometries
            .map(subLine => {
                wrap += 360;
                return subLine.coords.map(point => L.latLng([point[1], point[0] + wrap]));
            })
            .reduce((all, latlngs) => all.concat(latlngs))
            .map((latLngObj) => [latLngObj.lat, latLngObj.lng]);
    } else {
        return [];
    }
}


/**
 *
 * @param {L.LatLng} _from
 * @param {L.LatLng} _to
 * @param {...object} _options
 * @param {..number} _options.vertices
 * @param {..number} _options.offset
 * @returns {L.Polyline}
 * @constructor
 */
const ArcPolyline = ({start, end, options}) => {
    if (start[0] === end[0] && start[1] === end[1]) {
      return null;
    }

    const from = L.latLng(start);
    const to = L.latLng(end);
    const _options = {
        vertices: 10,
        offset: 10,
        ...options
    };

    const generator = new arc.GreatCircle(_latLngToXY(from), _latLngToXY(to));

    const arcLine = generator.Arc(_options.vertices, {offset: _options.offset});
    const latLngs = _createLatLngs(arcLine, from);
    // console.log(latLngs)
    return <Polyline positions={latLngs} options={_options} />
};

export default ArcPolyline;

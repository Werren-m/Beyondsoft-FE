import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import './styles.css'

import geoUrl from "./geo.json"

const MapChart = (props) => {

  const { latitude, longitude } = props.address

  return (
    <ComposableMap style={props.style}>
      <ZoomableGroup zoom={4} center={[latitude, longitude]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[latitude, longitude]}>
          <circle r={4} fill="#F53" />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart


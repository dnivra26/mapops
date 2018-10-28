import React from 'react';
import { compose, withProps } from "recompose"
import { GMap } from "./GMap";
import { withScriptjs, withGoogleMap } from "react-google-maps"

export const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>  <GMap {...props} />)
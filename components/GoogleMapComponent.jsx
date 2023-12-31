import React, { Component } from 'react';
 
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import useMediaQuery from '@mui/material/useMediaQuery';
 
const styleMapCp = {display: 'flex', width: 500, height: 400, position: 'relative', backgroundColor: 'blue'}
const styleMapSp = {display: 'flex', width: 330, height: 400, position: 'relative'}



class GoogleMapComponent extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      cords: [
        {latitude: 51.507351, longitude: -0.127758},
        {latitude: 31.046051, longitude: 34.851612},
        {latitude: 51.165691, longitude: 10.451526},
        {latitude: 52.215933, longitude: 19.134422},
        {latitude: 50.0874654, longitude: 14.4212535},
        {latitude: 7.5554942, longitude: 80.7137847},
      ]
    }
  }
 
//   drawMarker = () => {
//     return this.state.cords.map((store, i) => {
//       return <Marker key={i} id={i} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
 
//      onClick={() => console.log("Event Hanlder Called")} />
//     })
//   }
 
  render() {
    return (
        <Map
            google={this.props.google}
            style={styleMapSp}
            zoom={10}
            initialCenter={{ 
                lat: 48.8587374, 
                lng: 2.1822259
            }}>
        {/* {this.drawMarker()} */}
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(GoogleMapComponent);
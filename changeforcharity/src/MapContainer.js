import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};
var pos = {lat: 41,lng: 73};
function initMap() {
 // Try HTML5 geolocation.
   navigator.geolocation.getCurrentPosition(function(position) {
     pos = {
       lat: position.coords.latitude,
       lng: position.coords.longtitude
     };
     return pos;
   });
 }
export class MapContainer extends Component {
render() {
 var currentPosition = initMap();
  return (
    <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter ={{lat: 41.3163,lng: -72.9223}}
    />
  );
}
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyC5BH8TYMytIwV_vlMKgyuCulyCt1XhMQ0'
})(MapContainer);
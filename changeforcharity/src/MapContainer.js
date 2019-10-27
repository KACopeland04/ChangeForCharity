import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
 width: '100%',
 height: '100%'
};
export class MapContainer extends Component{
constructor(props){
 super(props);
 this.state = {
   stores: [{lat: 41.316230, lng: -72.929380},
           {latitude: 41.309190, longitude: -72.926270},
           {latitude: 41.308479, longitude: -72.915947},
           {latitude: 41.316830, longitude: -72.933990},
           {latitude: 41.307180, longitude: -72.935240},
           {latitude: 41.311279, longitude: -72.921249},
           {latitude: 41.305020, longitude: -72.923580},
           {latitude: 41.302440, longitude: -72.922460},
           {latitude: 41.302440, longitude: -72.941600},
           {latitude: 41.321110, longitude: -72.936050},
           {latitude: 41.328570, longitude: -72.964430},
           {latitude: 41.316830, longitude: -72.933990},
           {latitude: 41.306040, longitude: -72.925780},
           {latitude: 41.311279, longitude: -72.921249},
           {latitude: 41.308420, longitude: -72.938280},
           {latitude: 41.297820, longitude: -72.934280},
           {latitude: 41.310930, longitude: -72.921350}]
 }
}
displayMarkers = () => {
 return this.state.stores.map((store, index) => {
   return <Marker key={index} id={index} position={{
    lat: store.latitude,
    lng: store.longitude
  }}
  onClick={() => console.log("You clicked me!")} />
 })
}
render() {
  return (
    <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{lat: 41.308273, lng:-72.927879}}
    >
      {this.displayMarkers()}
     </Map>
  );
}
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyC5BH8TYMytIwV_vlMKgyuCulyCt1XhMQ0'
})(MapContainer);
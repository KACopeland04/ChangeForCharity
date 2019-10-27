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
   stores: [{name: "New Haven Reads", lat: 41.316230, lng: -72.929380},
           {name: "The Salvation Army", latitude: 41.309190, longitude: -72.926270},
           {name: "New Haven Boys and Girls Club", latitude: 41.308479, longitude: -72.915947},
           {name: "Yale Women's Center", latitude: 41.316830, longitude: -72.933990},
           {name: "Make Haven", latitude: 41.307180, longitude: -72.935240},
           {name: "Chapel Haven", latitude: 41.311279, longitude: -72.921249},
           {name: "Creative Arts Workshop", latitude: 41.305020, longitude: -72.923580},
           {name: "Habitat for Humanity", latitude: 41.302440, longitude: -72.922460},
           {name: "Neighborhood and Housing Service", latitude: 41.302440, longitude: -72.941600},
           {name: "New Haven People's Center", latitude: 41.321110, longitude: -72.936050},
           {name: "Liberty Community Services", latitude: 41.328570, longitude: -72.964430},
           {name: "Apt Foundation", latitude: 41.306040, longitude: -72.925780},
           {name: "The Community Foundation", latitude: 41.308420, longitude: -72.938280},
           {name: "Ronald McDonald House", latitude: 41.297820, longitude: -72.934280},
           {name: "Leap", latitude: 41.310930, longitude: -72.921350}]
 }
}
displayMarkers = () => {
 return this.state.stores.map((store, index) => {
   return <Marker key={index} id={index} label= {store.name} position={{
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
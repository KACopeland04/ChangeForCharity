import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
width: '100%',
height: '100%'
};
export class MapContainer2 extends Component{
constructor(props){
super(props);
this.state = {
  stores: [{name: "New Haven Reads", latitude: 41.316230, longitude: -72.929380},
          {name: "New Haven Boys and Girls Club", latitude: 41.308420, longitude: -72.938280},
          {name: "Ronald McDonald House", latitude: 41.297820, longitude: -72.934280}]
}
}
displayMarkers = () => {
return this.state.stores.map((store, index) => {
  return <Marker key={index} id={index} label= {store.name} position={{
   lat: store.latitude,
   lng: store.longitude
 }}/>
});
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
})(MapContainer2);
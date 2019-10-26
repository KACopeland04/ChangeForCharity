import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
import MapContainter from './MapContainer.js';
const Wrap = styled.div`
  background-color: white;
  text-align: center;
  color: #02525B;
  opacity: 0.9;
  font-size: 20px;
  font-family: 'Comfortaa', sans-serif;
  height: 50px;
`;
class DisplayMap extends Component {
 render() {
   return (
    <Wrap> <h1> Look for charities in your area! </h1>
    <MapContainter></MapContainter></Wrap>
   );
 }
}
DisplayMap.label = "Display Map";
export default DisplayMap;

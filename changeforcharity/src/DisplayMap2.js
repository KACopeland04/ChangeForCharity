import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
import MapContainer2 from './MapContainer2.js';
const Wrap = styled.div`
  background-color: white;
  text-align: center;
  color: #02525B;
  opacity: 0.9;
  font-size: 20px;
  font-family: 'Comfortaa', sans-serif;
  height: 50px;
`;
const NavBar = styled.div`
  float: left;
  text-align: left;
  background-color: black;
  opacity: 0.8;
  position: relative;
  top: -25px;
  height: 25px;
  width: 100%;
  font-size: 20px;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
  font-family: 'Comfortaa', sans-serif;

  .dropbtn {
    & > img {
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
  }
  .dropdown {
    text-align: center;
    color: black;
    font-size: 15px;
    position: relative;
  }

  .dropdown-content {
    display: none;
    background-color: #f1f1f1;
    position: relative;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    text-decoration: underline;
  }
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
const Wrapper = styled.div`
 height: 1vw;
`;
class DisplayMap2 extends Component {
 render() {
   return (
    <Wrapper>
    <NavBar>
    &nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/UserPage">
            <font color="white">Profile</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </NavBar>
    <Wrap> <h1> These are the charities in your area that match your interests! </h1>
    <MapContainer2></MapContainer2></Wrap></Wrapper>
   );
 }
}
DisplayMap2.label = "DisplayMap2";
export default DisplayMap2;

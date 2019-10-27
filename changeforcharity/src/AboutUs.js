import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
import Charity1 from "./charity1.jpg";
import Donating from "./Donating.jpg";
import Charity2 from "./charity2.jpg";
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

const Wrap = styled.div`
    height: 1vw;
`;

const EndBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 25px;
  width: 100%;
  position: relative;
  bottom: -135px;
  font-size: 15px;
  color: white;
  text-align: right;
`;

const MissionStatement = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 80px;
`;
const WhoAreWeHeader = styled.div`
background-color: white;
text-align: center;
color: #02525B;
font-size: 20px;
font-family: 'Comfortaa', sans-serif;
height: 50px;
`;
const Images = styled.div`
& > img
{
 display: inline-block;
 position:relative;
bottom: -135px;
  width: 462px;
  height: 300px;
}
  }
`;
class AboutUs extends Component {
 render() {
   return (
    <Wrap>
        <NavBar>
        &nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Login">
            <font color="white">Log In</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Sign Up</font>
            </a> 
        </NavBar>
    <WhoAreWeHeader><h1>Who Are We? </h1> </WhoAreWeHeader> 
        <p> </p>
        <MissionStatement> <p>Our goal at Change for Charity is to connect YOU to your community! Every action, no matter how small, can help build up your local organizations. We hope to give you the power to make a difference in communities and causes that are important to you, helping them grow and thrive.</p> </MissionStatement>
        <Images> <img src={Charity1} /> <img src={Charity2} /> <img src={Donating} /></Images>
        <EndBar>
            <font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font>
        </EndBar>
        </Wrap>
   );
 }
}
AboutUs.label = "About Us";
export default AboutUs;

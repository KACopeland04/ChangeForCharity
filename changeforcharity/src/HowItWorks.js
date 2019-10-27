import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
import Picture2 from "./picture2.jpg";
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
  bottom: -110px;
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
  margin-top: 15px;
`;
const HowItWorksHeader = styled.div`
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
  margin-left: 32%;
  margin-right: 20%;
  margin-top: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 500px;
  height: 300px;
}
  }
`;

const HowItWorksText =  styled.div`
  text-align: center;
  font-size: 25px;
  padding-left: 70px;
  padding-right: 70px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 35px;
`;


class HowItWorks extends Component {
 render() {
   return (
    <Wrap>
        <NavBar>
        &nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Log In</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Sign Up</font>
            </a> 
        </NavBar>
        <HowItWorksHeader> <h1>How Does it Work? </h1></HowItWorksHeader>
        <HowItWorksText> <p> Every time you make a purchase, the cost is rounded up to the nearest dollar and the extra change is added to and stored in your account balance. At the end of the month, you can choose a local charity (or have one recommended to you based on your interests) to donate your spare change to!</p></HowItWorksText>
        <Images><img src={Picture2} /> </Images>
        <EndBar>
            <font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font>
        </EndBar>
        </Wrap>
   );
 }
}
HowItWorks.label = "HowItWorks";
export default HowItWorks;

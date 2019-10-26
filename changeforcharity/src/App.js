import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import ProfilePicture from "./ProfilePicture.png";
import Coin from "./Coin.png";
import Button from "./Button.js";
import Background from "./Background2.png"
import MapContainter from './MapContainer.js';

const Wrap = styled.div`
  color: black;
  font-size: 50px;
  font-family: 'Comfortaa', sans-serif;
`;
const Wrap1 = styled.div`
  background-image: url(${Background});
  background-size: contain;
  position: bottom left;
  opacity: 0.95;
  font-family: 'Comfortaa', sans-serif;
  `;
const WrapText = styled.div`
  color: black;
  opacity: 0.9;
  font-size: 50px;
  font-family: 'Comfortaa', sans-serif;
  height: 800px;
`;
const Wrap2 = styled.div`
  background-color: white;
  color: black;
  font-size: 50px;
  font-family: 'Comfortaa', sans-serif;
`;
const Header = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 110px;
  text-align: center;
  position: relative;
  top: -210px;
  padding-left: 9%;
  padding-right: 10%;
`;
const WhoAreWeHeader = styled.div`
  color: #FB3D3F;
  opacity: 1.0;
  font-size: 80px;
  text-align: center;
  position: relative;
  top: 30px;
  padding-left: 10%;
  padding-right: 10%;
`;
const HowItWorksHeader = styled.div`
  color: #FB3D3F;
  opacity: 1.0;
  font-size: 80px;
  text-align: center;
  position: relative;
  top: 15px;
  padding-left: 10%;
  padding-right: 10%;
`;
const GetStartedHeader = styled.div`
  color: #FB3D3F;
  opacity: 1.0;
  font-size: 80px;
  text-align: center;
  position_relative;
  top: 40px;
  padding-left: 10%;
  padding-right: 10%;
`;
const HowItWorks =  styled.div`
  text-align: center;
  font-size: 25px;
  padding-left: 70px;
  padding-right: 70px;
  font-family: 'Open Sans', sans-serif;
`;
const ImportantButton1 = styled.div`
  position: relative;
  left: 175px;
  top: 10px;
  display: inline-block;
  background-color: white;
`;

const CoinImage = styled.div`
  display: inline-block;
  padding-top: 5%;
  padding-left: 4%;
  opacity: 0.85;
  position: relative;
  
  & > img {
    height: 150px;
    width: 150px;
    display:block;
  }
`;
const CoinImage2 = styled.div`
  display: inline-block;
  opacity: 0.85;
  position: relative;
  top: -410px;
  right: -1200px;
  & > img {
    height: 150px;
    width: 150px;
    display:block;
  }
`;
const MissionStatement = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  padding-left: 70px;
  padding-right: 70px;
`;
const MovingFor = styled.div`
  position: relative;
  left: -22px;
  top: -230px;
`; 
const MovingCharity = styled.div`
  position: relative;
  top: -250px;
`;

const DivBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 15px;
  width: 100%;
  top: -200px;
`;

const EndBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 25px;
  width: 100%;
  position: relative;
  bottom: -25px;
  font-size: 15px;
  color: white;
  text-align: right;
`;

const NavBar = styled.div`
  float: left;
  text-align: left;
  background-color: black;
  opacity: 0.85;
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


function App() {
  return (
   <Wrap>
    <Wrap1>
    <WrapText>
       <NavBar>
       &nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Log In</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Sign Up</font>
            </a> 
        </NavBar>
        <CoinImage> <img src ={Coin} /> </CoinImage> <Header>  CHANGE FOR CHARITY </Header> <CoinImage2> <img src ={Coin} /> </CoinImage2>
        </WrapText>
        </Wrap1>
        <DivBar></DivBar> 
        <WhoAreWeHeader> Who Are We? </WhoAreWeHeader> 
        <Wrap2>
        <p> </p>
        <MissionStatement> <p>Our goal at Change for Charity is to connect YOU to your community! Every action, no matter how small, can help build up your local organizations. We hope to give you the power to make a difference in communities and causes that are important to you, helping them grow and thrive.</p> </MissionStatement>
        <HowItWorksHeader> How Does it Work? </HowItWorksHeader>
        <HowItWorks> <p> Every time you make a purchase, the cost is rounded up to the nearest dollar and the extra change is added to and stored in your account balance. At the end of the month, you can choose a local charity (or have one recommended to you based on your interests) to donate your spare change to!</p></HowItWorks>
        <GetStartedHeader> Get Started Today! </GetStartedHeader> 
        <ImportantButton1><Button myLink = "https://google.com" myText = "Charities Near You"></Button>
        <Button myLink = "https://google.com" myText = "Explore Your Interests"></Button> 
        <Button myLink = "https://google.com" myText = "Create An Account"></Button> </ImportantButton1>
        </Wrap2>
        <EndBar>
          <font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font>
        </EndBar>
        
  </Wrap>

  );
}

export default App;

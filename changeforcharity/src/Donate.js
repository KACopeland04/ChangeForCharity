import React from 'react';
import styled from "styled-components";
import Button from "./Button.js"
const Wrapper = styled.div`
color: black;
font-size: 50px;
font-family: 'Comfortaa', sans-serif;
`;
const Wrap1 = styled.div`
background-color: white;
background-size: contain;
position: relative;
backgroundImage: transparent;
opacity: 0.85;
`;
const TextWrap = styled.div`
background-color: white;
color: black;
font-size: 50px;
font-family: 'Comfortaa', sans-serif;
`;
const Title = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 50px;
  text-align: center;
  position: relative;
  top: 25px;
  padding-left: 10%;
  padding-right: 10%;
`;
const CharityName1 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 20px;
  text-align: left;
  position: relative;
  top: 80px;
`;
const CharityName2 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 20px;
  text-align: left;
  position: relative;
  top: 180px;
`;
const CharityName3 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 20px;
  text-align: left;
  position: relative;
  top: 285px;
`;
const NavBar = styled.div`
  float: left;
  text-align: left;
  background-color: black;
  opacity: 0.8;
  position: relative;
  top: 0px;
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
const Button1 = styled.div`
   position: relative;
   left: 10px;
   top: 100px;
   height: 50px;
   width: 100px;
   background: #02525B;
   text-align: center;
   font-size: 25px;
`;
const Button2 = styled.div`
   position: relative;
   left: 10px;
   top: 200px;
   height: 50px;
   width: 100px;
   background: #02525B;
   text-align: center;
   font-size: 25px;
`;
const Button3 = styled.div`
   position: relative;
   left: 10px;
   top: 300px;
   height: 50px;
   width: 100px;
   background: #02525B;
   text-align: center;
   font-size: 25px;
`;
const ThankYou = styled.div`
color: black;
opacity: 1.0;
font-size: 40px;
text-align: center;
position: relative;
top: 400px;
padding-left: 10%;
padding-right: 10%;
`;
const EndBar = styled.div`
 background-color: black;
 opacity: 0.8;
 height: 25px;
 width: 100%;
 position: relative;
 bottom: -410px;
 font-size: 15px;
 color: white;
 text-align: right;
`;
function Donate() {
   return(
       <Wrapper>
          <Wrap1></Wrap1>
          <NavBar>
        &nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/UserPage">
            <font color="white">Profile</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </NavBar>
          <Title> Choose a Charity to Donate To: </Title>
          <CharityName1> Ronald McDonald House Charities </CharityName1>
          <Button1><Button myText = "DONATE NOW" myLink ="https://rmhc-ctma.org/what-we-do/rmh-connecticut/"></Button></Button1>
          <CharityName2> Boys and Girls Clubs of America </CharityName2>
          <Button2><Button myText = "DONATE NOW" myLink ="https://www.bgca.org/"></Button></Button2>
          <CharityName3> New Haven Reads </CharityName3>
          <Button3><Button myText = "DONATE NOW" myLink="https://newhavenreads.org/"></Button></Button3>
          <TextWrap>
              <ThankYou> Thank you for choosing to make a difference in your community! </ThankYou>
          </TextWrap>
          <EndBar><font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font></EndBar>
      </Wrapper>
   );
}
export default Donate;
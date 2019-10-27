import React from 'react';
import styled from "styled-components";
import './App.css';
import Button1 from "./Button1.js";
import Button2 from "./Button2.js";
import Button3 from "./Button3.js";
import Button4 from "./Button4.js";
import Button5 from "./Button5.js";
import Button6 from "./Button6.js";
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
const EndBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 25px;
  width: 100%;
  position: relative;
  bottom: -150px;
  font-size: 15px;
  color: white;
  text-align: right;
`;
const Buttons = styled.div`
position: relative;
left: 300px;
top: 100px;
height: 200px;
width: 200px;
border-radius: 100px;
display: inline-block;
background: #02525B;
text-align: center;
font-size: 25px;
`;
const Buttons2 = styled.div`
position: relative;
left: 300px;
top: 100px;
height: 200px;
width: 200px;
border-radius: 100px;
display: inline-block;
background: #02525B;
text-align: center;
font-size: 25px;
`;
const Question = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 40px;
  text-align: center;
  position: relative;
  top: 80px;
  padding-left: 10%;
  padding-right: 10%;
`;
const Title = styled.div`
color: black;
opacity: 1.0;
font-size: 60px;
text-align: center;
position: relative;
top: 40px;
padding-left: 10%;
padding-right: 10%;
`;
function Interests() {
  return (
      <Wrapper>
          <NavBar>
            &nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Log In</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Sign Up</font>
            </a> 
         </NavBar>
          <Title> Welcome to the Charity Interest Quiz! </Title>
          <TextWrap>
              <Question> Choose the topic(s) that interests you most: </Question>
          </TextWrap>
          <Buttons><Button1 myText = "Music"></Button1></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Buttons><Button2 myText = "Education"></Button2></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Buttons><Button3 myText = "Animals"></Button3></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Buttons><Button4 myText = "Food"></Button4></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Buttons><Button5 myText = "Security"></Button5></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Buttons><Button6 myText = "Social Good"></Button6></Buttons>
          <EndBar>
            <font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font>
        </EndBar>
      </Wrapper>
  );
}
export default Interests;
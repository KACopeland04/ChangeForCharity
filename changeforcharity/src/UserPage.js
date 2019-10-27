import React from 'react';
import styled from "styled-components";
import Button from './Button.js'
import {total} from './ManualInput.js'
import './App.css';
var current;
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
const Total = styled.div`
   color: black;
   opacity: 1.0;
   font-size: 20px;
   text-align: right;
   position: relative;
   top: 10px;
`;
const DaysRemaining = styled.div`
   color: black;
   opacity: 1.0;
   font-size: 20px;
   text-align: right;
   position: relative;
   top: 20px;
`;
const Buttons = styled.div`
position: relative;
left: 200px;
top: 100px;
height: 100px;
width: 200px;
display: inline-block;
background: #02525B;
text-align: center;
font-size: 25px;
`;
const Intro = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 40px;
  text-align: center;
  position: relative;
  top: 80px;
  padding-left: 10%;
  padding-right: 10%;
`;
const Welcome = styled.div`
color: black;
opacity: 1.0;
font-size: 60px;
text-align: center;
position: relative;
top: 40px;
padding-left: 10%;
padding-right: 10%;
`;
const EndBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 25px;
  width: 100%;
  position: relative;
  bottom: -210px;
  font-size: 15px;
  color: white;
  text-align: right;
`;
function UserPage() {
   return (
       <Wrapper>
           <Wrap1></Wrap1>
           <NavBar>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Login"><font color="white">Log In</font></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://google.com">
            <font color="white">Sign Up</font>
            </a> </NavBar>
           <Total> Total: {String(total)} Cents </Total>
           <DaysRemaining> Days Remaining: 5 </DaysRemaining>
           <Welcome> Welcome to Change for Charity! </Welcome>
           <TextWrap>
               <Intro> Thank you for choosing to make a difference in your community! Access your account details below: </Intro>
           </TextWrap>
           <Buttons><Button myText = "Max Limit"></Button></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Buttons><Button myText = "Manage Your Cards" myLink = "/CreditCard"></Button></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Buttons><Button myText = "Manual Input" myLink ="/ManualInput"></Button></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <br></br> <br></br>
           <Buttons><Button myText = "Your Charities"></Button></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Buttons><Button myText = "DONATE!"></Button></Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <EndBar><font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font></EndBar>
       </Wrapper>
   );
}
export default UserPage;
export {current};
import React, {useState} from "react";
import './App.css';
import styled from "styled-components";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import {current} from './UserPage.js'
const Wrap = styled.div`
background-color: white;
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
const EndBar = styled.div`
  background-color: black;
  opacity: 0.8;
  height: 25px;
  width: 100%;
  position: relative;
  bottom: -500px;
  font-size: 15px;
  color: white;
  text-align: right;
`;
var total = 0;
export default function Enter(props)
{
  const [Dollars, setDollars] = useState("");
  const [Cents, setCents] = useState("");
  function validateForm() {
      return Cents;
  }
  function handleSubmit(event){
      event.preventDefault();
      total = 100-parseInt({Cents});
  }
return (
   <Wrap>
       <h1>Please Input Exact Amount Spent!</h1>
       <NavBar>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/UserPage">
            <font color="white">Profile</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavBar>
       <div className="Enter">
           <form onSubmit={handleSubmit}>
               <FormGroup controlID="Dollars" bsSize="large">
                   <FormLabel> Dollars </FormLabel>
                   <FormControl
                       autoFocus
                       type="Dollars"
                       value={Dollars}
                       onChange={e => setDollars(e.target.value)}
                       />
               </FormGroup><FormGroup controlID ="Cents" bsSize="large">
                   <FormLabel>Cents</FormLabel>
                   <FormControl
                       value={Cents}
                       total = {100-parseInt({Cents})+parseInt({current})}
                       onChange={e => setCents(e.target.value)}
                       type="Cents"
                       />
               </FormGroup>
               <Button block bsSize="large" type="submit" href="/UserPage2">
                   Enter
               </Button>
               <EndBar><font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font></EndBar>
           </form>
       </div>
   </Wrap>
   )
}

export {total};
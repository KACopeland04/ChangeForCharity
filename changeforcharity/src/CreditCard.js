import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './App.css';
import styled from "styled-components";
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
  background-color: white;
  color: #02525B;
  opacity: 0.9;
  font-size: 20px;
  font-family: 'Comfortaa', sans-serif;
  height: 50px;
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
class CreditCard extends Component {
 render() {
   return (
     <StripeProvider apiKey="pk_test_lBXU8skFRmj9SWMiDFFHvqmL00rp86qKbr">
       <div className="example">
       <NavBar>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/"> <font color="white">Home</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AboutUs"> <font color="white">About Us</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/HowitWorks"> <font color="white"> How it Works </font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/DisplayMap"> <font color="white">Explore Nearby Charities</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Interests"> <font color="white">Find Causes for You</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/UserPage">
            <font color="white">Profile</font>
            </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavBar>
         <Wrap> <h1> Connect a Card</h1> </Wrap>
         <Elements>
           <CheckoutForm />
         </Elements>
         <EndBar><font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font></EndBar>
       </div>
     </StripeProvider>
   );
 }
}
CreditCard.label = "Credit Card";
export default CreditCard;
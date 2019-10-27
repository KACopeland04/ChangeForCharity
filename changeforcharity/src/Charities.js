import React from 'react';
import styled from "styled-components";
const Wrapper = styled.div`
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
  top: 20px;
  padding-left: 10%;
  padding-right: 10%;
`;
const CharityName1 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 30px;
  text-align: left;
  position: relative;
  color: #02525B;
  top: 40px;
`;
const CharityName2 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 30px;
  text-align: left;
  position: relative;
  color: #02525B;
  top: 90px;
`;
const CharityName3 = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 30px;
  text-align: left;
  position: relative;
  color: #02525B;
  top: 125px;
`;
const Category1 = styled.div`
color: #FB3D3F;
opacity: 1.0;
font-size: 25px;
text-align: left;
position: relative;
top: 50px;
`;
const Category2 = styled.div`
color: #FB3D3F;
opacity: 1.0;
font-size: 25px;
text-align: left;
position: relative;
top: 95px;
`;
const Category3 = styled.div`
color: #FB3D3F;
opacity: 1.0;
font-size: 25px;
text-align: left;
position: relative;
top: 130px;
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
const Description1 = styled.div`
color: black;
opacity: 1.0;
font-size: 20px;
text-align: left;
position: relative;
top: 60px;
`;
const Description2 = styled.div`
color: black;
opacity: 1.0;
font-size: 20px;
text-align: left;
position: relative;
top: 100px;
`;
const Description3 = styled.div`
color: black;
opacity: 1.0;
font-size: 20px;
text-align: left;
position: relative;
top: 140px;
`;
const EndBar = styled.div`
 background-color: black;
 opacity: 0.8;
 height: 25px;
 width: 100%;
 position: relative;
 bottom: -300px;
 font-size: 15px;
 color: white;
 text-align: right;
`;
function Charities() {
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
          <Title> Your Charities: </Title>
          <CharityName1> Ronald McDonald House Charities </CharityName1>
          <Category1>Education: Elementary School</Category1>
          <Description1>The Ronald McDonald House of Connecticut is a temporary “home away from home” for families of children who are being treated at nearby hospitals and healthcare facilities, such as the Children’s Hospital at Yale-New Haven, Yale-New Haven Hospital, The Hospital of St. Raphael, Bridgeport Hospital. With a proper referral we will house the family of any child being treated in any nearby health facility.</Description1>
          <CharityName2> Boys and Girls Clubs of America </CharityName2>
          <Category2>Education: Elementary School</Category2>
          <Description2>We believe every kid has what it takes. The mission and core beliefs of Boys and Girls Clubs fuel our commitment to promoting safe, positive and inclusive environments for all. Boys and Girls Clubs of America supports all youth and teens – of every race, ethnicity, gender, gender expression, sexual orientation, ability, socio-economic status, and religion – in reaching their full potential.</Description2>
          <CharityName3> New Haven Reads </CharityName3>
          <Category3>Education: Elementary School</Category3>
          <Description3>New Haven Reads, founded to “share the joy and power of reading,” increases the literacy skills of children to empower their academic success by providing individually tailored one-on-one after-school tutoring, educational family support, and a community book bank, all at no cost to participants.</Description3>
          <EndBar><font color="white">Created by Karen Copeland, Shruti Verma, and Morgan McNulty. October 2019, YHacks</font></EndBar>
      </Wrapper>
   );
}
export default Charities;
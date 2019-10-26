import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
const Wrap = styled.div`
    background-color: white;
`;

const MissionStatement = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  padding-left: 70px;
  padding-right: 70px;
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
class AboutUs extends Component {
 render() {
   return (
    <Wrap>
    <WhoAreWeHeader> Who Are We? </WhoAreWeHeader> 
        <p> </p>
        <MissionStatement> <p>Our goal at Change for Charity is to connect YOU to your community! Every action, no matter how small, can help build up your local organizations. We hope to give you the power to make a difference in communities and causes that are important to you, helping them grow and thrive.</p> </MissionStatement>
        </Wrap>
   );
 }
}
AboutUs.label = "About Us";
export default AboutUs;

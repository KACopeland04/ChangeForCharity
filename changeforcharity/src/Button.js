import React, { Component } from "react";
import styled from "styled-components";
const Wrap = styled.button`
  background: #009B97;
  border-radius: 8px;
  color: white;
  height: 100px;
  font-family: 'Open Sans', sans-serif;
  width: 200px;
  font-size: 17px;
  text-align: center;
  margin-left: 110px;
`;

class Button extends Component {
   constructor(props) {
       super(props);
   }
   btnClick() {
       window.open(this.props.myLink);
   }
   render() {
       return (
           <Wrap onClick={this.btnClick.bind(this)}>{this.props.myText} </ Wrap>);
   }
}

Button.label = "Button Component";
export default Button;
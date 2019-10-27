import React, { Component } from "react";
import styled from "styled-components";
const Wrap = styled.button`
   background: #009B97;
   border-radius: 400px;
   color: white;
   height: 200px;
   width: 200px;
   font-size: 17px;
   text-align: center;
   margin-left: 110px;
`;
class Button2 extends Component {
   constructor(props) {
       super(props);
       this.state = {isClicked: false};
   }
   handleClick() {
       const {isClicked} = this.state;
       this.setState({isClicked: true});
   }
   btnClick() {
       window.open(this.props.myLink);
   }
   render() {
       const { isClicked } = this.state;
       if(isClicked)
       {
       return (
           <Wrap>
               <button type="button"><a href="https://google.com">High School</a></button>
               <button type="button"><a href="/DisplayMap2">Elementary School</a></button>
               <button type="button"><a href="https://google.com">College/University</a></button>
               <button type="button"><a href="https://google.com">Middle School</a></button>
               </Wrap>
           )
       }
       else
       {
       return (
           <button type="button" onClick={e => this.handleClick(e)}>{this.props.myText}</button>
       )
       }
}
}
Button2.label = "Button2 Component";
export default Button2;
import React, { Component } from "react";
import styled from "styled-components";
const Wrap = styled.button`
   background: #009B97;
   border-radius: 400px;
   color: white;
   height: 200px;
   width: 200px;
   font-size: 20px;
   text-align: center;
   margin-left: 110px;
`;
class Button6 extends Component {
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
               <button type="button"><a href="https://google.com">Planned Parenthood</a></button>
               <button type="button"><a href="https://google.com">LGBTQ</a></button>
               <button type="button"><a href="https://google.com">Volunteering</a></button>
               <button type="button"><a href="https://google.com">Mental Health</a></button>
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
Button6.label = "Button6";
export default Button6;
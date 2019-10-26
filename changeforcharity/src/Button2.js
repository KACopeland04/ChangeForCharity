import React, { Component } from "react";
import styled from "styled-components";
const Wrap = styled.button`
    background: #02525B;
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
    }
    btnClick() {
        window.open(this.props.myLink);
    }
    render() {
        return (
            <Wrap onClick={this.btnClick.bind(this)}>{this.props.myText} </ Wrap>);
    }
 }
 
 Button2.label = "Button2 Component";
 export default Button2;
import React from 'react';
import styled from "styled-componenets";
import Button2 from "./Button2.js";
import Background from ""

const Wrapper = styled.div`
  color: black;
  font-size: 50px;
  font-family: "FiraSans";
`;
const Wrap1 = styled.div`
  background-image: url(${Background});
  background-size: contain;
  position: relative;
  backgroundImage: transparent;
  opacity: 0.85;
`;
const TextWrap = styled.div`
  background-color: white;
  color: black;
  font-size: 50px;
  font-family: "FiraSans";
`;
const Buttons = styled.div`
  position: relative;
  left: 175px;
  top: 10px;
  display: inline-block;
  background-color: white;
`;
const Question = styled.div`
    color: black;
    opacity: 1.0;
    font-size: 50px;
    text-align: center;
    position: relative;
    top: -300px;
    padding-left: 10%;
    padding-right: 10%;
`;
const Title = styled.div`
  color: black;
  opacity: 1.0;
  font-size: 120px;
  text-align: center;
  position: relative;
  top: -210px;
  padding-left: 10%;
  padding-right: 10%;  
`;  

function Interests() {
    return (
        <Wrapper>
            <Wrap1></Wrap1>
            <Title> Welcome to the Charity Interest Quiz! </Title>
            <TextWrap>
                <Question> Choose the topic that interests you most: </Question>
            </TextWrap>
            <Buttons><Button2 myText = "Music"></Button2>
            <Button2 myText = "Education"></Button2>
            <Button2 myText = "Animals"></Button2>
            <Button2 myText = "Food"></Button2>
            <Button2 myText = "Security"></Button2></Buttons>
        </Wrapper>
    )

}
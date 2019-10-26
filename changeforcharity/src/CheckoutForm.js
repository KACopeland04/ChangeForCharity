import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import styled from "styled-components";
const Wrap = styled.div`
  background-color: white;
  color: black;
  opacity: 0.9;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`;
class CheckoutForm extends Component {
 constructor(props) {
   super(props);
   this.state = {complete: false};
   this.submit = this.submit.bind(this);
 }
 submit() {
   this.setState({complete: true});
 }
 render() {
   if (this.state.complete) return (<Wrap> <p> Thank you! Your donations will make a significant difference in your community. </p> </Wrap>);
   return (
     <div className="checkout">
       <Wrap><p>Please enter your information below. </p> </Wrap>
       <CardElement /> <br></br>
       <button onClick={this.submit}><Wrap> Submit </Wrap> </button>
     </div>
   );
 }
}
export default injectStripe(CheckoutForm);
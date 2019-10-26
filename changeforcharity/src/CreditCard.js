import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './App.css';
import styled from "styled-components";
const Wrap = styled.div`
  background-color: white;
  color: #02525B;
  opacity: 0.9;
  font-size: 20px;
  font-family: 'Comfortaa', sans-serif;
  height: 50px;
`;
class CreditCard extends Component {
 render() {
   return (
     <StripeProvider apiKey="pk_test_lBXU8skFRmj9SWMiDFFHvqmL00rp86qKbr">
       <div className="example">
         <Wrap> <h1> Connect a Card</h1> </Wrap>
         <Elements>
           <CheckoutForm />
         </Elements>
       </div>
     </StripeProvider>
   );
 }
}
CreditCard.label = "Credit Card";
export default CreditCard;
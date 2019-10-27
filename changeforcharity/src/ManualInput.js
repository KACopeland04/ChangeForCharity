import React, {useState} from "react";
import './App.css';
import styled from "styled-components";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import {current} from './UserPage.js'
const Wrap = styled.div`
background-color: white;
background-size: contain;
position: relative;
backgroundImage: transparent;
opacity: 0.85;
`;
var total = 0;
export default function Enter(props)
{
  const [Dollars, setDollars] = useState("");
  const [Cents, setCents] = useState("");
  function validateForm() {
      return Cents;
  }
  function handleSubmit(event){
      event.preventDefault();
  }
return (
   <Wrap>
       <h1>Please Input Exact Amount Spent!</h1>
       <div className="Enter">
           <form onSubmit={handleSubmit}>
               <FormGroup controlID="Dollars" bsSize="large">
                   <FormLabel> Dollars </FormLabel>
                   <FormControl
                       autoFocus
                       type="Dollars"
                       value={Dollars}
                       onChange={e => setDollars(e.target.value)}
                       />
               </FormGroup><FormGroup controlID ="Cents" bsSize="large">
                   <FormLabel>Cents</FormLabel>
                   <FormControl
                       value={Cents}
                       total = {100-parseInt({Cents})+parseInt({current})}
                       onChange={e => setCents(e.target.value)}
                       type="Cents"
                       />
               </FormGroup>
               <Button block bsSize="large" type="submit" href="/UserPage">
                   Enter
               </Button>
           </form>
       </div>
   </Wrap>
   )
   total = validateForm()+current;
}

export {total};
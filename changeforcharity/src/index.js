import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CreditCard from './CreditCard.js'
import DisplayMap from './DisplayMap.jsx'
import AboutUs from './AboutUs.js'
import './fonts/FiraSans-Medium.ttf';
import './fonts/FiraSans-MediumItalic.ttf'
//<script src="https://js.stripe.com/v3/" />
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/CreditCard" component={CreditCard} />
        <Route path="/DisplayMap" component={DisplayMap} />
        <Route path="/AboutUs" component={AboutUs} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

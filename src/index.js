import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SafariZone from './safari-zone/safari-zone'
import Home from './home/home'

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Success from './result/success';
import Failure from './result/failure';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'




ReactDOM.render((  
    <BrowserRouter>
    <div className="navbar navbar-light bg-light">
      <Link to={'/'}> <h2 className="text-warning">Safari Zone!</h2> </Link>
    </div>
      <Route exact path="/" component={Home} />
      <Route path="/SafariZone" component={SafariZone} />
      <Route path="/success" component={Success} />
      <Route path="/failure" component={Failure} />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

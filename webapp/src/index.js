import React from 'react';
import ReactDOM from 'react-dom';
import './CreatorConnect.css';
import { Redirect, Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {render} from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Home from './Home';
import UsersArray from './UsersArray';
import Launch from './Launch'
import Error from './Error'
import About from './About' 

//the router below reads the path that the user is on and throws a React component at it depending on the path.
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Launch}/>
      <Route  exact path="/cards" component={Home}/>
      <Route exact path="/about" exact component={About}/>
      <Route exact path="/*" exact component={Error} />
    </Switch>
  </Router>
)
//the code below reads the path and renders component on a conditional basis. i.e. /home throws two different components at different places...
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();

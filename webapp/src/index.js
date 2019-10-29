import React from 'react';
import ReactDOM from 'react-dom';
import './CreatorConnect.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {render} from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Home from './Home';
import UsersArray from './UsersArray';
import SignUp from './SignUp';
import Login from './Login';
import Launch from './Launch'

//the router below reads the path that the user is on and throws a React component at it depending on the path.
const routing = (
  <Router>
      <Route path="/launch" component={Launch}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/login" component={Login} />
      <Route path="/cards" component={UsersArray}/>
  </Router>
)



//the code below reads the path and renders component on a conditional basis. i.e. /home throws two different components at different places...
if(window.location.pathname == "/launch")
{
  ReactDOM.render(routing, document.getElementById("root"));
}
else if(window.location.pathname == "/signUp")
{
  ReactDOM.render(routing, document.getElementById("root"));
}
else if(window.location.pathname == "/login")
{
  ReactDOM.render(routing, document.getElementById("root"));
}
else if(window.location.pathname == "/cards")
{
  ReactDOM.render(<Home/>, document.getElementById("root"));  
  ReactDOM.render(routing, document.getElementById("users"));
}


//ReactDOM.render(routing, document.getElementById('cards'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

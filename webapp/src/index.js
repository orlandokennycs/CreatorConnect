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
import WrongPassword from './wrongPassword';
import NonexistentUser from './nonexistentUser';
import ExistentUser from './existentUser';
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";

/*const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);*/
var AuthCookie = localStorage.getItem("session")
const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return 2 > 1 ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};
//the router below reads the path that the user is on and throws a React component at it depending on the path.
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Launch}/>
      <Route  exact path="/cards" component={Home}/>
      <Route exact path="/existentUser" component={ExistentUser}/>
      <Route exact path="/nonexistentUser" component={NonexistentUser}/>
      <Route exact path="/wrongPassword" component={WrongPassword}/>
      <Route exact path="/*" exact component={Error} />
      </Switch>
  </Router>
)
//the code below reads the path and renders component on a conditional basis. i.e. /home throws two different components at different places...
ReactDOM.render(routing, document.getElementById("root"));

//ReactDOM.render(routing, document.getElementById('cards'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

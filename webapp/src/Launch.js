import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import './CreatorConnect.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {render} from 'react-dom';

//*This is the Login Component that will prompt users to either sign up or login to CreatorConnect*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.
const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  }
}

class Launch extends React.Component {
  render() { 
    return (
      <div>{/* DO NOT REMOVE THIS DIV COMPONENT*/}
         <h2><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect</h2>

        <div className = "buttonWrapper">
          <Link to="/signUp">
            <button type="button" className="customButton">Sign Up</button>
          </Link>
        </div>
        <div className = "buttonWrapper">
          <Link to="/login">
            <button type="button" className="customButton">Login</button>
          </Link>
        </div>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default Launch

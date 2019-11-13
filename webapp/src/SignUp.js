import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import './CreatorConnect.css';

/*This is the Login Component that will allow users to sign up for CreatorConnect*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

class SignUp extends React.Component {
  render() {
    return (
      <div>{/* DO NOT REMOVE THIS DIV COMPONENT*/}
       <h1>Signup</h1>
        <form action="" method="POST">
            <div>
                <input type="text" name="name" class="signupbox" placeholder="Name"></input>
            </div>

            <div>
                <input type="text" name="username" class="signupbox" placeholder="Username"></input>
            </div>

            <div>
                <input type="password" name="password" class="signupbox" placeholder="Password"></input>
            </div>

            <div>
                <input type="password" name="verify" class="signupbox" placeholder="Verify Password"></input>
            </div>

            <div>
                <input type="text" name="fsuid" class="signupbox" placeholder="FSU ID"></input>
            </div>

            <div>
                <input type="text" name="email" class="signupbox" placeholder="Email"></input>
            </div>

            <div>
                <input type="text" name="gradyear" class="signupbox" placeholder="Grad Year"></input>
            </div>

            <fieldset>
                <label for='legend' class="legend">Choose Your Skill </label>
                <div id="parent">
                  <div id="wide">
                    <label for='electrical'>Electrical Circuits: </label>
                    <input type="checkbox" id="electrical" name="skills" value="Electrical Circuits"></input>
                  </div>
                  <div id="narrow">
                    <label for='lazer'>Laser Cutting: </label>
                    <input type="checkbox" id="lazer" name="skills" value="Laser Cutting"></input>
                    </div>
                <div>
                    <label for='brand'>Brand Development: </label>
                    <input type="checkbox" id="brand" name="skills" value="Brand Development"></input>
                </div>
                <div>
                    <label for='graphic'>Graphic Design: </label>
                    <input type="checkbox" id="graphic" name="skills" value="Graphic Design"></input>
                </div>
            </div>
            </fieldset>
            <hr></hr>
            <button type="submit">Submit!</button>
          </form>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default SignUp

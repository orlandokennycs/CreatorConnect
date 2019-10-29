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
                <label for='name'>Name: </label>
                <input type="text" name="name"></input>
            </div>
            <div>
                <label for='username'>Username: </label>
                <input type="text" name="username"></input>
            </div>
            <div>
                <label for='password'>Password: </label>
                <input type="password" name="password"></input>
            </div>
            <div>
                <label for='verify'>Verify password: </label>
                <input type="password" name="verify"></input>
            </div>
            <div>
                <label for='fsuid'>FSU ID: </label>
                <input type="text" name="fsuid"></input>
            </div>
            <div>
                <label for='email'>Email: </label>
                <input type="text" name="email"></input>
            </div>
            <div>
                <label for='gradyear'>Grad Year: </label>
                <input type="text" name="gradyear"></input>
            </div>
            <fieldset>
                <legend>Choose your skills</legend>
                <div>
                    <label for='electrical'>Electrical Circuits: </label>
                    <input type="checkbox" id="electrical" name="skills" value="Electrical Circuits"></input>
                </div>
                <div>
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
            </fieldset>
            <hr></hr>
            <button type="submit">Submit!</button>
          </form>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default SignUp

import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import './CreatorConnect.css';

/*This is the Login Component that will allow users to login to CreatorConnect*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

class Login extends React.Component {
  render() {
    return (
      <div>{/* DO NOT REMOVE THIS DIV COMPONENT*/}
      <h2>Login</h2>
     <form action="" method="POST" class="loginbox">
         <div>
             <label for='username' class="login">Username: </label>
             <input type="text" name="username"></input>
         </div>
         <div>
             <label for='password' class="login">Password: </label>
             <input type="password" name="password"></input>
         </div>
         <div>
             <label for='expires' class="login">Stay Logged in: </label>
             <input type="checkbox" id="expires" name="doesNotExpire" value="true"></input>
         </div>
         <hr></hr>
         <button type="submit" class="round" >Submit!</button>
     </form>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default Login

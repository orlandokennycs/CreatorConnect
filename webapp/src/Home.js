import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import UsersArray from './UsersArray';
import './CreatorConnect.css';

/*This is the Home component that will hold the logo and the search bar*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  }
}
class Home extends React.Component {
  render() { 
    return (
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}

        <h2 className="textAboveSearch"><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect</h2>
        <div class="parent">
          <div class="searchBar"><input id="myInput" type="text" onkeyup="searchBar()" placeholder="Search through names and skills..."></input></div>
        </div>
        <div class="cards-container" id = "users">
      <UsersArray></UsersArray>
      </div>
      
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default Home

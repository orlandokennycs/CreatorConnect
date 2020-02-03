import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import UsersArray from './UsersArray';
import './CreatorConnect.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

/*This is the Home component that will hold the logo and the search bar*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.
const cookies = new Cookies()
var AuthCookie = cookies.get('session')

const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  }
}
class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.keyUpHandler.bind(this, 'search')
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    
    fetch('http://127.0.0.1:5000/login')
    .then(results => results.json())
    .then(response => {
      
      this.setState({data: JSON.stringify(response)});
      alert(JSON.stringify(response))
    })
  }

  keyUpHandler(refName, e) {
    console.log(window.count)
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var searchResults = []
    var userText = []
    for(var i = 0; i < window.count; i++)
    {
      var div = document.getElementById("searchUsers" + i);
      userText.push(div.innerText)
    } 
    for(i = 0; i < window.count; i++)
        {
          searchResults = []
          if (userText[i].toUpperCase().indexOf(filter) > -1) 
          {
            div = document.getElementById("searchUsers" + i)
            searchResults.push(div)
            div.style.display = ""
          } 
          else 
          {
            div = document.getElementById("searchUsers" + i);
            div.style.display = "none";
          }
        }
  }


  

  render() { 
    return 2<1 ? (<Redirect to={{pathname: "/",}}/>) : 
    (
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
      { 
        
      
      }
      <form action='http://127.0.0.1:5000/logout' method = 'POST' >
        <div class="topnav" type="submit">
          <a href="#home"><button className = "logout" type="submit">Logout</button></a>
        </div>
      </form>

        <h2 className="textAboveSearch"><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect</h2>
        <div class="parent">
          <div class="searchBar"><input id="myInput" type="text" onKeyUp={this.handleSearch} placeholder="Search through names and skills..." ref="search"></input></div>
        </div>
        <div class="cards-container" id = "users">
      <UsersArray></UsersArray>
      </div>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default Home

import React from 'react'
import ReactDOM from 'react-dom';
import UsersArray from './UsersArray';
import './CreatorConnect.css';
import { Redirect } from 'react-router-dom';
/*This is the Home component that will hold the logo and the search bar*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

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
      data: 0
    };
  }
    
  componentDidMount() {
    const axios = require('axios');
    const axiosWithCookies = axios.create({
      withCredentials: true
    });
    axiosWithCookies.get(`http://localhost:5000/login`)
        .then((response) => {
            this.setState({
                data: parseInt(JSON.stringify(response.data))
            });
        }).catch((error) => {
            console.error(error);
        });
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
    
    return this.state.data === 0 ? 
    (
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
      { }
      <form action='http://localhost:5000/logout' method = 'POST' >
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
    :
    (
      
      this.state.data === 5 ?
      (
        <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
        {
          alert("You must be logged in in order to access this page. You will now be redirected to the home page")
        }
        <Redirect to={{pathname: "/",}}/>
      </div>
      )
      :
      (
        this.state.data === 2 ? 
        (
          <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
          {
            alert("The password you entered was incorrect. You will now be redirected to the launch page.")
          }
          <Redirect to={{pathname: "/",}}/>
        </div>
        )
        :
        (
          this.state.data === 3 ? 
          (
            <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
            {
              alert("We couldn't find a user with the email you entered. You will now be redirected to the launch page.")
            }
            <Redirect to={{pathname: "/",}}/>
          </div>
          )
          :
          (
            this.state.data === 1 ?
            (
              <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
              {
                alert("A user with that email already exists. You will now be redirected to the launch page.")
              }
              <Redirect to={{pathname: "/",}}/>
            </div>
            )
            :
            (
               
                <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
                {
                alert("An unkown error occured. Please contact support. You will now be redirected to the launch page.")
                }
                <Redirect to={{pathname: "/",}}/>
                </div>
              
              
            )
          )
        )
          
      )

      
        
    
    ) 
  }
}
export default Home

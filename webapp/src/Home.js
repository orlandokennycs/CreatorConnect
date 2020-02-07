import React from 'react'
import ReactDOM from 'react-dom';
import UsersArray from './UsersArray';
import './CreatorConnect.css';
import { Redirect } from 'react-router-dom';
import { booleanTypeAnnotation } from 'babel-types';
import Modal from 'react-modal';
/*This is the Home component that will hold the logo and the search bar*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  },
  BETA:
  {
    fontSize: ".25em"
  },
  EMPH:
  {
    fontSize: "1.2em"
  },
  SLI:
  {
    fontSize: "2.0em"
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.keyUpHandler.bind(this, 'search')
    this.state = {
      data: 0,
      totalUsers: 0,
      modalIsOpen: false,
      sptModalIsOpen: false, 
      ftrModalIsOpen: false,
      teamModalIsOpen: false,

      
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.sptOpenModal = this.sptOpenModal.bind(this);
    this.sptAfterOpenModal = this.sptAfterOpenModal.bind(this);
    this.sptCloseModal = this.sptCloseModal.bind(this);

    this.ftrOpenModal = this.ftrOpenModal.bind(this);
    this.ftrAfterOpenModal = this.ftrAfterOpenModal.bind(this);
    this.ftrCloseModal = this.ftrCloseModal.bind(this);

    this.teamOpenModal = this.teamOpenModal.bind(this);
    this.teamAfterOpenModal = this.teamAfterOpenModal.bind(this);
    this.teamCloseModal = this.teamCloseModal.bind(this);
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
    
    axios.get(`http://localhost:5000/userCount`)
        .then((response) => {
            this.setState({
                totalUsers: parseInt(JSON.stringify(response.data.data))
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

  

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  sptOpenModal() {
    this.setState({sptModalIsOpen: true});
  }
 
  sptAfterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
 
  sptCloseModal() {
    this.setState({sptModalIsOpen: false});
  }

  ftrOpenModal() {
    this.setState({ftrModalIsOpen: true});
  }
 
  ftrAfterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
 
  ftrCloseModal() {
    this.setState({ftrModalIsOpen: false});
  }

  teamOpenModal() {
    this.setState({teamModalIsOpen: true});
  }
 
  teamAfterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
 
  teamCloseModal() {
    this.setState({teamModalIsOpen: false});
  }

  render() { 
    
    return this.state.data === 0 ? 
    (
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
      { }
      
      <div class="topnav">
        <form className="formWrap" action='http://localhost:5000/logout' method = 'POST' >
          <a href="#home"><button className = "logout" type="submit">Logout</button></a> 
        </form>
        <button className="leftNavBar" onClick={this.openModal}>ABOUT  |</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal">
          <div className="modalBtn">
            <button onClick={this.closeModal}>close</button>
          </div>
          <h1 className="modalLogo"><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect<span style={STYLE.BETA}>BETA</span></h1>
          <div className="modalText">
            <p>
              <span style={STYLE.SLI}>C</span><span style={STYLE.EMPH}>reator</span><span style={STYLE.SLI}>C</span><span style={STYLE.EMPH}>onnect</span>’s primary goal is to bridge the gap between skilled students and those who need assistance with developing their independent projects! <br></br>
              <span style={STYLE.SLI}>R</span>ally with us here at The Innovation Hub as we encourage the expression of creativity and critical thinking! <br></br>
              <span style={STYLE.SLI}>E</span><span style={STYLE.EMPH}>mpathize, Ideate, and Build</span> no matter what field you're in!<br></br>
              <span style={STYLE.SLI}>A</span>dvance your skillset and expertise with our network of other Creators!<br></br>
              <span style={STYLE.SLI}>T</span>ogether we'll network like never before!<br></br>
              <span style={STYLE.SLI}>E</span>nroll in <span style={STYLE.EMPH}>C</span>reator<span style={STYLE.EMPH}>C</span>onnect today!
            </p>
          </div>
        </Modal>
       {/* <a href="http://www.google.com" target="_blank" className="support">FEEDBACK</a>*/}

        <button className="leftNavBar" onClick={this.teamOpenModal}>TEAM  |</button>
        <Modal
          isOpen={this.state.teamModalIsOpen}
          onAfterOpen={this.teamAfterOpenModal}
          onRequestClose={this.teamCloseModal}
          contentLabel="Example Modal">
          <div className="modalBtn">
            <button onClick={this.teamCloseModal}>close</button>
          </div>

          <h1 className="modalLogo"><span style={STYLE.EMPH}>M</span>eet&nbsp;&nbsp;the<span style={STYLE.EMPH}>&nbsp;&nbsp;T</span>eam</h1>
          <div className="teamBlurbContainer">
            
          </div>
        </Modal>
        
        <button className="leftNavBar" onClick={this.ftrOpenModal}>WHAT'S NEXT?  |</button>
        <Modal
          isOpen={this.state.ftrModalIsOpen}
          onAfterOpen={this.ftrAfterOpenModal}
          onRequestClose={this.ftrCloseModal}
          contentLabel="Example Modal">
          <div className="modalBtn">
            <button onClick={this.ftrCloseModal}>close</button>
          </div>
        </Modal>

        <button className="leftNavBar"><a href="https://forms.gle/j19asMDP9VCjtQMDA" target="_blank">FEEDBACK</a></button>

        
      </div>


      
      

        <h2 className="textAboveSearch"><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect<span style={STYLE.BETA}>BETA</span></h2>
        <div class="parent">
          <div class="searchBar"><input id="myInput" type="text" onKeyUp={this.handleSearch} placeholder={"Search through " + this.state.totalUsers + " users and their skills..."} ref="search"></input></div>
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

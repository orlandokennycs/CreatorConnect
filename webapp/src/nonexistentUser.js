import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation, isUserWhitespacable } from 'babel-types';
import './CreatorConnect.css';
import { Redirect, withRouter } from "react-router-dom";

/*This is the Home component that will hold the logo and the search bar*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.

const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  },
  NAPS:
  {
    fontSize: ".75em"
  },
}

/*function HomeButton() {
  let history = useHistory();
  history.push('/');
};*/
class NonexistentUser extends React.Component {
  /*
  Component Composition
  Declarative UI
  event -> state change -> re-render
  */
  state = {
    toLaunch: false,
  }
  handleSubmit = () => {
    this.setState({
      toLaunch: true,
    });
  }

  render()
  { 
    if(this.state.toLaunch === true)
    {
      return <Redirect to="/" />
    }

    
    return (
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
        <div className = "fourohfour">
          <h2 className="textAboveSearch"><span style={STYLE.SPAN}>NONEXISTENT USER</span></h2>
          <h2><span style={STYLE.NAPS}>The user does not exist!</span> </h2> 
          <h3 className="homeText" onClick={this.handleSubmit}>home</h3>
        </div>
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default withRouter (NonexistentUser)

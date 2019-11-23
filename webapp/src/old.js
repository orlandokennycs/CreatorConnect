import React from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import './CreatorConnect.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {render} from 'react-dom';
import MultiSelect from "@khanacademy/react-multi-select";
import { Dropdown } from 'semantic-ui-react'


//*This is the Login Component that will prompt users to either sign up or login to CreatorConnect*/

//NOTE- YOUR HTML CODE NEEDS TO BE AT WRAPPED AROUND A DIV OBJECT.
const STYLE = {
  SPAN:
  {
    fontSize: "1.5em"
  }
}

const options = [
  {label: "App Development", value: 1},
  {label: "Electrical Circuits", value: 2},
  {label: "Laser Cutting", value: 3},
  {label: "Computer Programming", value: 4},
  {label: "3D Design", value: 5},
  {label: "Brand Development", value: 6},
  {label: "Design Thinking", value: 7},
  {label: "Digital Fabrication/3D Printing", value: 8},
  {label: "Social Entrepreneurship", value: 9},
  {label: "Entrepreneurship", value: 10},
  {label: "Game/VR Design", value: 11},
  {label: "Graphic Design", value: 12},
  {label: "Digital Photography", value: 13},
  {label: "User Experience (UX) Design", value: 14},
  {label: "Social Media Marketing", value: 15},
  {label: "Video Production", value: 16},
  {label: "Web Design", value: 17},
  {label: "Web Development", value: 18},
];


class Launch extends React.Component {
  state = {
    selected: [],
  }
  

  render() { 
    const {selected} = this.state;
    return (
      <div>{/* DO NOT REMOVE THIS DIV COMPONENT*/}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>
      <div className ="bothDivs">
        <div className = "leftDiv">
          <img img src="/images/logo.png" alt="hub logo" className = "hubLogo"></img>
        </div>
        <div className = "rightDiv">
          <div className = "signUpOrIn">
            <div className = "CreatorConnectLogo">
              <h4><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect</h4>
              <div className="informationWrap">
              <div className = "information">
              <form action="" method="POST">
                  <input className="inputBox" type="text" name="firstName" placeholder="First Name"></input>
                
                  <input className="inputBox" type="text" name="lastName" placeholder="Last Name"></input>
                
                  <input className="inputBox" type="text" name="fsuEmail" placeholder="FSU e-mail"></input>
             
                  <input className="inputBox" type="password" name="password" placeholder="Password"></input>
                
                  <input className="inputBox" type="password" name="verify" placeholder="Verify Password"></input>
                
                  <input className="inputBox" type="text" name="gradyear" placeholder="Grad Year"></input>
                
                  <div className="inputBox">
                    <MultiSelect
                    options={options}
                    selected={selected}
                    onSelectedChanged={selected => this.setState({selected})}
                    />
                  </div>
                  
            <button className="inputBox" type="submit">Submit!</button>
            <button className="inputBox" >Existing User? Click Here</button>
        </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         {/*<h2><span style={STYLE.SPAN}>C</span>reator<span style={STYLE.SPAN}>C</span>onnect</h2>

        <div className = "buttonWrapper">
          <Link to="/signUp">
            <button type="button" className="customButton">Sign Up</button>
          </Link>
        </div>
        <div className = "buttonWrapper">
          <Link to="/login">
            <button type="button" className="customButton">Login</button>
          </Link>
    </div>*/}
      {/* DO NOT REMOVE THIS DIV COMPONENT*/}</div>
      )
  }
}
export default Launch

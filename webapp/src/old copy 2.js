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
  { key: '1', text: 'App Development', value: '1' },
  { key: '2', text: 'Electrical Circuits', value: '2' },
  { key: '3', text: 'Laser Cutting', value: '3' },
  { key: '4', text: 'Computer Programming', value: '4' },
  { key: '5', text: '3D Design', value: '5' },
  { key: '6', text: 'Brand Development', value: '6' },
  { key: '7', text: 'Design Thinking', value: '7' },
  { key: '8', text: 'Digital Fabrication/3D Printing', value: '8' },
  { key: '9', text: 'Social Entrepreneurship', value: '9' },
  { key: '10', text: 'Entrepreneurship', value: '10' },
  { key: '11', text: 'Game/VR Design', value: '11' },
  { key: '12', text: 'Graphic Design', value: '12' },
  { key: '13', text: 'Digital Photography', value: '13' },
  { key: '14', text: 'User Experience (UX) Design', value: '14' },
  { key: '15', text: 'Social Media Marketing', value: '15' },
  { key: '16', text: 'Video Production', value: '16' },
  { key: '17', text: 'Web Design', value: '17' },
  { key: '18', text: 'Web Development', value: '18' },
]

const DropdownBox = () => (
  <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)


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
                    <select placeholder="Skill">
                      <option default>Skill #1</option>
                      <option value="App Development">App Development</option>
                      <option value="Electrical Circuits">Electrical Circuits</option>
                      <option value="Laser Cutting">Laser Cutting</option>
                      <option value="Computer Programming">Computer Programming</option>
                      <option value="3D Design">3D Design</option>
                      <option value="Brand Development">Brand Development</option>
                      <option value="Design Thinking">Design Thinking</option>
                      <option value="Digital Fabrication/3D Printing">Digital Fabrication/3D Printing</option>
                      <option value="Social Entrepreneurship">Social Entrepreneurship</option>
                      <option value="Entrepreneurship">Entrepreneurship</option>
                      <option value="Game/VR Design">Game/VR Design</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Digital Photography">Digital Photography</option>
                      <option value="User Experience (UX) Design">User Experience (UX) Design</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>  
                    </select>
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

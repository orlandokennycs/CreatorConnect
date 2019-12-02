import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { numberTypeAnnotation } from 'babel-types';
import './CreatorConnect.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {render} from 'react-dom';
import MultiSelect from "@khanacademy/react-multi-select";
import { Dropdown } from 'semantic-ui-react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { bool } from 'prop-types';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'App Development',
  'Electrical Circuits',
  'Laser Cutting',
  'Computer Programming',
  '3D Design',
  'Brand Development',
  'Design Thinking',
  'Digital Fabrication/3D Printing',
  'Social Entrepreneurship',
  'Entrepreneurship',
  'Game/VR Design',
  'Graphic Design',
  'Digital Photography',
  'User Experience (UX) Design',
  'Social Media Marketing',
  'Video Production',
  'Web Design',
  'Web Development',
];

function getStyles(name, skill, theme) {
  return {
    fontWeight:
      skill.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




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
    shown: true,
  }
}
export default function MultipleSelect() {
  const existingUser = "Existing User? Click here"
  const newUser = "New User? Click Here"
  const boolArray = [true, false]
  const [registration, hideRegistration] = useState(boolArray[0]);
  const [login, setLogin] = useState(boolArray[1]);
  const [button, setButton] = useState(existingUser);
  const classes = useStyles();
  const theme = useTheme();
  const [skill, setSkill] = React.useState([]);

  const handleChange = event => {
    setSkill(event.target.value);
  };

  function triggerRegistration() {hideRegistration(!registration)}
  function triggerLogin() {setLogin(!login)}
  function triggerButton() {
    if(button == existingUser)
    {
      setButton(newUser)
    }
    else
    {
      setButton(existingUser)
    }
  }

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSkill(value);
  };

  return (
    <div>
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
              
              {registration && <form action="" method="POST">
                  <input className="inputBox" type="text" name="firstName" placeholder="First Name"></input>
                
                  <input className="inputBox" type="text" name="lastName" placeholder="Last Name"></input>
                
                  <input className="inputBox" type="text" name="fsuEmail" placeholder="FSU E-mail"></input>
             
                  <input className="inputBox" type="password" name="password" placeholder="Password"></input>
                
                  <input className="inputBox" type="password" name="verify" placeholder="Verify Password"></input>
                
                  <input className="inputBox" type="text" name="gradyear" placeholder="Grad Year"></input>
                  
                  <div className="trial">
                    <FormControl className={classes.formControl}>
                      <InputLabel className="select_text" id="demo-mutiple-chip-label">Select your Skills (Choose up to 5) ...</InputLabel>
                        <Select
                          labelId="demo-mutiple-chip-label"
                          id="demo-mutiple-chip"
                          multiple
                          value={skill}
                          onChange={handleChange}
                          input={<Input id="select-multiple-chip" />}
                          renderValue={selected => 
                            (
                              <div className={classes.chips}>
                                {selected.map(value => 
                                (
                                  <Chip key={value} label={value} className={classes.chip} />
                                ))}
                              </div>
                            )}
                          MenuProps={MenuProps}>
                          {names.map(name => 
                            (
                              <MenuItem key={name} value={name} style={getStyles(name, skill, theme)}>
                                {name}
                              </MenuItem>
                            ))}
                        </Select> 
                  </FormControl>
                </div>
                  
                <button className="inputBox" type="submit">Submit!</button>
                </form>}
                  {login && <form action="" method="POST">
                
                  <input className="inputBox" type="text" name="fsuEmail" placeholder="FSU E-mail"></input>
             
                  <input className="inputBox" type="password" name="password" placeholder="Password"></input>
                
                <button className="inputBox" type="submit">Log In</button>
                </form>} 
                
                <button className="inputBox_existing" onClick={() => {
                  triggerRegistration();
                  triggerLogin();
                  triggerButton();
                }}>
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      
      
      
      
    </div>
  );
}
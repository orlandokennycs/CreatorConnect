import React from 'react'
import ReactDOM from 'react-dom';
import './CreatorConnect.css';

class UsersArray extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/allUsers')
    .then(results => results.json())
    .then(response => {
      this.setState({data: response.data});
    })
  }
  
  render() {
    const userCount = this.state.data.map((user) => console.log("")).length;
    console.log(userCount)
    window.count=userCount
  
    return(
      this.state.data.map((user, i) => {
        return(
        <div className="card firstUsers" id={"searchUsers" + i} key={i}>
              <h1 className="name">{user.name}</h1>
              <p className="email">{user.email}</p>
              <p className="skillsHead">skills </p>
              <ul className="skillsArr">
              {
                user.skills.map((skill, j) => {
                  return(<li key={j}><p>{skill}</p></li>)
                })
              }
            </ul>
        </div>
        )
      })  
    )
  }
}
export default UsersArray

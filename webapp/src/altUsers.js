import React from 'react'
import { numberTypeAnnotation } from 'babel-types';

//res.header('Access-Control-Allow-Origin', "*")
class AltUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    fetch('http://127.0.0.1:5000/randUsers')
    .then(results => results.json())
    .then(response => {
      this.setState({data: response.data})
    })

  /*
  componentDidMount() {
    fetch('http://127.0.0.1:5000/randUsers')
    .then(results => results.json())
    .then(foobar => {
      var users = [];
      foobar.data.map((user) => {
        users.push(user.name)
      })

      var fsuIds = [];
      foobar.data.map((user) => {
        fsuIds.push(user.fsu_id)
      })

      this.setState({names: users, ids: fsuIds})
    })
    */


     /* .then(res => {
        var users = [];
        var fullNames = [];
        res.data.map((user) => {
          fullNames.push(user.name)
        })
        res.data.map((user) => {
          users.push(fullNames)
        })
        this.setState({names: fullNames})
      })

      foobar.names
      */
    
  }


  /*
  render(){
    this.state.foobar.map((user) => {
      return
    })
  }
*/
  
  render() {
    console.log(this.state)
    return(
      this.state.data.map((user) => {
        return(
        <div class="container">
        <div class="card firstUsers" id="searchUsers" >
              <h1 class="name">{user.name}</h1>
              <p class="email">{user.email}</p>
              <p class="skillsHead">skills </p>
              <ul class="skillsArr">
              {
                user.skills.map((skill) => {
                  return(
                    <li><p>{skill}</p></li>
                  )
                })
              }
              </ul>
          </div>
        </div>
        )
      })

      
    )
    
    
  }
  
    /*
    return(
        <div class="container">
        <div class="card firstUsers" id="searchUsers" key={this.state.names.toString()}>
              <h1 class="name" names={this.state.names}>
                {this.state.names}
                {console.log(this.state.names)}</h1>
              <p class="email"></p>
  
          </div>
        </div>
        ) */

/*
componentDidMount() {
  fetch('http://127.0.0.1:5000/randUsers')
  .then(results => {
    return results.json();
  }).then(res => {
    var users = [];
    var fullNames = [];
    res.data.map((user) => {
      fullNames.push(user.name)
    })
    res.data.map((user) => {
      users.push(fullNames)
    })
    this.setState({names: fullNames})
  })
  
}

render() {
  return(
    this.state.names.map((names) => {
      return(
      <div class="container">
      <div class="card firstUsers" id="searchUsers" key={names.toString()}>
            <h1 class="name">{names}</h1>
            <p class="email"></p>

        </div>
      </div>
      )
    })
  )
  
}
*/



}
export default AltUsers

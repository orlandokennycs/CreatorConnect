import React from 'react'

//res.header('Access-Control-Allow-Origin', "*")
class AltUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [], 
    };
  }



componentDidMount() {
  fetch('http://127.0.0.1:5000/randUsers')
  .then(results => {
    return results.json();
  }).then(res => {
    //let names = 
    var users = [];
    var fsuId = [];
    res.data.map((user) => {
      console.log(user.fsu_id)
      users.push(user.name)

      /*return(
        <h1>{user.name}</h1>
      )*/
    })
    this.setState({names: users})
  })
  
}
render() {
  return(
    this.state.names.map((names) => {
      return(
      <div class="container">
      <div class="card firstUsers" id="searchUsers">
            <h1 class="name">{names}</h1>
            <p class="email"></p>

        </div>
      </div>
      )
    })
  )
}
}
export default AltUsers

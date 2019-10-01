import React from 'react'

//res.header('Access-Control-Allow-Origin', "*")

var string = "users"

var request = new XMLHttpRequest()



request.open('GET', 'http://127.0.0.1:5000/users', true)//'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  

  if (request.status >= 200 && request.status < 400) {
    data.forEach(name => {
      console.log(name.title)
    })
  } else {
    console.log('error')
  }
}

request.send()

class Users extends React.Component {
  render() {
    return <h1 id = "jsonData">{string}</h1>
  }
}
export default Users

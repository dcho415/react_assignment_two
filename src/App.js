import React, { Component } from 'react';
import './App.css';
import Albums from './components/Albums';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null,
      users: null
    }
  }

  componentDidMount = () => {
    fetch('http://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => this.setState({ albums: json }))

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json }))
  }

  render() {
    return (
      <div className="App" style={{ textAlign: 'center'}} >
        <Albums 
          data={this.state.albums}
          users={this.state.users}
        />          
      </div>
    )
  }
}
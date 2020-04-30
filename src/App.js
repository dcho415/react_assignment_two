import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Albums from './components/Albums';
import Header from './components/layout/Header';
import Photos from './components/Photos';


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
      <Router>
        <div className="App" style={{ textAlign: 'center'}} >
          <Header/>
          <Route exact path="/" render={props => (
            <Albums 
              data={this.state.albums}
              users={this.state.users}
            />
          )}/>
          <Route path="/photos/:albumId" component={Photos} />
        </div>
      </Router>
    )
  }
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import AlbumList from './components/AlbumList';
import Header from './components/layout/Header';
import Photos from './components/Photos';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ textAlign: 'center'}} >
          <Header/>
          <Route exact path="/" component={AlbumList} />
          <Route path="/photos/:albumId" component={Photos} />
        </div>
      </Router>
    )
  }
}
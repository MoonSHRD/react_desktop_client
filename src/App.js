import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Chatscontent from './components/chatscontent/chatscontent';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Chatscontent />
        {/*<div className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React/Electron</h2>*/}
        {/*</div>*/}
        {/*<p className="App-intro">*/}
          {/*Hello dfdf Electron!*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;

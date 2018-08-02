import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Chatscontent from './components/chatsblock/chatsblock';

import './App.css';
import Messagingblock from "./components/messagingblock/messagingblock";
import Preloader from "./components/preloader/preloader";


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Preloader/> */}
          <Navbar />
          <Chatscontent />
          <Messagingblock />
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

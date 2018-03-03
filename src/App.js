import React, { Component } from 'react';
import Card from "./Card.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GWENT</h1>
        </header>
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default App;

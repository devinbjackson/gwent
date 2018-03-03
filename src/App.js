import React, { Component } from 'react';
import Card from "./Card.js";
import axios from "axios";
import { connect } from 'react-redux';
import { getAllCards } from "./ducks/reducer";

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
   this.state={

   }

} 

componentDidMount(){
  this.props.getAllCards();
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GWENT</h1>
        </header>
        <Card card={this.props.cardList[0]}/>
        <Card card={this.props.cardList[1]}/>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getAllCards})(App);

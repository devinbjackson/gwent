import React, { Component } from 'react';
import Card from "./Card.js";
import { connect } from 'react-redux';
import { getAllCards } from "./ducks/reducer";

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
   this.state={
    ai_deck: [],
    player_deck: []
   }

} 

componentWillMount(){
  this.props.getAllCards();
  this.setState({ai_deck:  this.shuffle(), player_deck: this.shuffle()})
}

shuffle(){
  var array = [];
  for(var i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 12))
  }
  return array;
};

  render() {
    const cardList = this.props.cardList
    const ai_deck = this.state.ai_deck.map(function(index){
      return (
      <div>
        <Card card={cardList[index] } key={index}/>
     </div>
        )
     })
    const player_deck = this.state.ai_deck.map(function(index){
      return (
      <div>
        <Card card={cardList[index]} key={index}/>
     </div>
        )
     })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GWENT</h1>
        </header>
        <div className="top-board">
        AI
        {ai_deck}
        </div>
        <div className="bottom-board">
        PLAYER
        {player_deck}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getAllCards})(App);

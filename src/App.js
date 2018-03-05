import React, { Component } from 'react';
import Card from "./Card.js";
import { connect } from 'react-redux';
import {
  getAllCards,
  toggleChoosing,
  togglePlacing,
  toggleTargeting,
  addPlayerMelee,
  addPlayerRanged,
  addPlayerSiege,
  hold
} from "./ducks/reducer";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ai_deck: [],
      player_deck: []
    }

  }

  componentWillMount() {
    this.props.getAllCards();
    this.setState({ ai_deck: this.shuffle(), player_deck: this.shuffle() })
  }

  shuffle() {
    var array = [];
    for (var i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 12))
    }
    return array;
  };

  displayCards(idArray) {
    const { cardList, playerMelee} = this.props;
    return idArray.map(function (num, index) {
      console.log("map", num, index, playerMelee)
      return (
        <div>
          <Card card={cardList[num]} key={num} id={num} />
        </div>
      )
    })
  }

  placeMelee(){
    const {holding, hold, togglePlacing, addPlayerMelee} = this.props
    addPlayerMelee(holding);
    hold();
    togglePlacing();
  }

  placeRanged(){
    const {holding, hold, togglePlacing, addPlayerRanged} = this.props
    addPlayerRanged(holding);
    hold();
    togglePlacing();
  }

  placeSiege(){
    const {holding, hold, togglePlacing, addPlayerSiege} = this.props
    addPlayerSiege(holding);
    hold();
    togglePlacing();
  }

  render() {
    const { cardList,
      isChoosing,
      isPlacing,
      isTargeting,
      toggleChoosing,
      toggleTargeting,
      togglePlacing,
      addPlayerMelee,
      addPlayerRanged,
      addPlayerSiege,
      hold,
      enemyMelee,
      enemyRanged,
      enemySiege,
      playerMelee,
      playerRanged,
      playerSiege,
      holding } = this.props
    const player_deck = this.displayCards(this.state.player_deck);
    return (
      <div className="App">
        <section className="left">
        </section>
        <section className="middle">
          <div className="top-board">
            <div className="row enemy-siege">
              {this.displayCards(enemySiege)}
            </div>
            <div className="row enemy-ranged">
              {this.displayCards(enemyRanged)}
            </div>
            <div className="row enemy-melee">
              {this.displayCards(enemyMelee)}
            </div>
          </div>
          <div className="bottom-board">
            <div onClick={isPlacing ? () => this.placeMelee(): undefined}
              className={`row ${isPlacing && "row-select"} player-melee`}>
              {this.displayCards(playerMelee)}
            </div>
            <div onClick={isPlacing ? () => this.placeRanged(): undefined}
              className={`row ${isPlacing && "row-select"} player-ranged`}>
              {this.displayCards(playerRanged)}
            </div>
            <div onClick={isPlacing ? () => this.placeSiege(): undefined}
              className={`row ${isPlacing && "row-select"} player-siege`}>
              {this.displayCards(playerSiege)}
            </div>
          </div>
        </section>
        <section className="right">
          <div className="ai-grave" />
          <div className="ai-stack" />
          <div className="player-stack" onClick={toggleChoosing} >
            <div className={`${isChoosing && "choosing"} hand`}>
              {player_deck}
            </div>
          </div>
          <div className="player-grave" />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getAllCards,
  toggleChoosing,
  togglePlacing,
  toggleTargeting,
  addPlayerMelee,
  addPlayerRanged,
  addPlayerSiege,
  hold
})(App);

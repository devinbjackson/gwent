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
  addEnemyMelee,
  addEnemyRanged,
  addEnemySiege,
  hold
} from "./ducks/reducer";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ai_deck: [],
      player_deck: [],
      game_over: false
    }
    this.handleFinish = this.handleFinish.bind(this)
  }

  componentWillMount() {
    this.props.getAllCards();
  }

  displayCards(idArray) {
    const { cardList, playerMelee } = this.props;
    return idArray.map(function (num, index) {
      return (
        <div>
          <Card card={cardList[num]} key={num} id={num} />
        </div>
      )
    })
  }

  shuffle() {
    var array = [];
    for (var i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 20))
    }
    return array;
  };

  placeMelee() {
    const { holding, hold, togglePlacing, addPlayerMelee } = this.props
    addPlayerMelee(holding);
    hold();
    togglePlacing();
  }

  placeRanged() {
    const { holding, hold, togglePlacing, addPlayerRanged } = this.props
    addPlayerRanged(holding);
    hold();
    togglePlacing();
  }

  placeSiege() {
    const { holding, hold, togglePlacing, addPlayerSiege } = this.props
    addPlayerSiege(holding);
    hold();
    togglePlacing();
  }

  handleFinish() {

    const { addEnemyMelee, addEnemySiege, addEnemyRanged } = this.props
    const array = this.shuffle()

    var i = 0;

    function myLoop() {
      setTimeout(function () {
        if (i === 8 || i === 9) {
          addEnemySiege(array[i])
        } else if (i % 2 === 0) {
          addEnemyRanged(array[i])
        } else {
          addEnemyMelee(array[i])
        }
        i++;
        if (i < 10) {
          myLoop();
        }
      }, 500)
      
    }

    myLoop();
    setTimeout(() =>
    this.setState({game_over: true})
    ,6000)
    
  }

  handleReload(){
    window.location.href = "/";
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
      holding,
      playerTotal,
      enemyTotal} = this.props
    const player_deck = this.displayCards(this.props.player_deck);
    return (
      <div className="App">
      {this.state.game_over?
    <div className="game-over">
    {playerTotal > enemyTotal? "YOU WIN!": "¯\\_(ツ)_/¯ Whatever, you still win."}
    <button onClick={this.handleReload} className="replay"> AGAIN </button>
    <footer>
    <p>Created by: Devin Jackson</p>
    <p>Contact information: <a href="http://portfolio.devinbjackson.host">Portfolio</a></p>
    <p>dev.jackson.dev@gmail.com</p>
    </footer>
    </div>
    :null
    }
        <section className="left">
          <div className="enemy-total">
            {this.props.enemyTotal}
          </div>
          <div onClick={this.handleFinish} className="next-button">
            FINISH
         </div>
          <div className="player-total">
            {this.props.playerTotal}
          </div>
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
            <div onClick={isPlacing ? () => this.placeMelee() : undefined}
              className={`row ${isPlacing && "row-select"} player-melee`}>
              {this.displayCards(playerMelee)}
            </div>
            <div onClick={isPlacing ? () => this.placeRanged() : undefined}
              className={`row ${isPlacing && "row-select"} player-ranged`}>
              {this.displayCards(playerRanged)}
            </div>
            <div onClick={isPlacing ? () => this.placeSiege() : undefined}
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
        <div className="easter e-top"/>
        <div className="easter e-bottom">
          THANK YOU FOR VISITING
        </div>
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
  addEnemyMelee,
  addEnemyRanged,
  addEnemySiege,
  hold
})(App);

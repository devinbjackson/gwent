import React, { Component } from 'react';
import Card from "./Card.js";
import { connect } from 'react-redux';
import { getAllCards } from "./ducks/reducer";

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

  render() {
    const cardList = this.props.cardList
    const ai_deck = this.state.ai_deck.map(function (index) {
      return (
        <div>
          <Card card={cardList[index]} key={index} />
        </div>
      )
    })
    const player_deck = this.state.player_deck.map(function (index) {
      return (
        <div>
          <Card card={cardList[index]} key={index} />
        </div>
      )
    })

    return (
      <div className="App">
        <section className="left">
        </section>
        <section className="middle">
          <div className="top-board">
            <div className="row enemy-siege">
            </div>
            <div className="row enemy-ranged">
            </div>
            <div className="row enemy-melee">
            </div>
          </div>
          <div className="bottom-board">
            <div className="row player-siege">
            </div>
            <div className="row player-ranged">
            </div>
            <div className="row player-melee">
            </div>
          </div>
        </section>
        <section className="right">
          <div className="ai-grave" />
          <div className="ai-stack" />
          <div className="player-stack" />
          <div className="player-grave" />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getAllCards })(App);

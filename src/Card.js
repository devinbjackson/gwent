import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlacing, hold } from "./ducks/reducer";

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }

  }

  handleClick(id){
    this.props.togglePlacing()
    this.props.hold(id)
  }

  render() {
    var card = null;
    if (this.props.card !== null) {
      card = this.props.card
    }
    const { togglePlacing, isChoosing } = this.props
    return (
      <div className="Card" onClick={isChoosing && (() => this.handleClick(card && this.props.id))}>
        <img className="card-image" src={`${card && card.image_url}`} />
      </div>
    );
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps, { togglePlacing, hold })(Card);

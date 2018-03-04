import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlacing } from "./ducks/reducer";

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }

  }


  render() {
    var card = null;
    if (this.props.card !== null) {
      card = this.props.card
    }
    const { togglePlacing, isChoosing } = this.props
    return (
      <div className="Card" onClick={isChoosing && togglePlacing}>
        <img className="card-image" src={`${card && card.image_url}`} />
      </div>
    );
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps, { togglePlacing })(Card);

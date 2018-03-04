import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(this.props.card)
    return (
      <div className="Card">
        <img className="card-image" src={`${card && card.image_url}`} />
      </div>
    );
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(Card);

import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';


class Card extends Component {

 constructor(props){
     super(props)
    this.state={
    }

 } 


  render() {
      console.log(this.props)
    return (
      <div className="Card">
         {/* <img src={`${this.props.card.face}`} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(Card);

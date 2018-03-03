import React, { Component } from 'react';
import axios from "axios";

class Card extends Component {

 constructor(props){
     super(props)
    this.state={
        face: []
    }

 } 
 componentDidMount(){
     axios.get("/api/cards").then((res)=>this.setState({face: res.data}))
 }

  render() {
    return (
      <div className="Card">
           {this.state.face}hi
      </div>
    );
  }
}

export default Card;

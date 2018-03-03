import axios from "axios";

// Action Constants
const GET_ALL_CARDS ="GET_ALL_CARDS"

// Action Creators

export function getAllCards() {
    return {
      type: GET_ALL_CARDS,
      payload: axios.get("/api/cards").then(response => response.data)
    };
  }

// Initial State

const initialState = {
    cardList: []
  };


// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_CARDS:
        return Object.assign({}, state, {});
      default:
        return state;
    }
  }
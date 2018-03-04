import axios from "axios";

// Action Constants
const GET_ALL_CARDS = "GET_ALL_CARDS";
const TOGGLE_CHOOSING = "TOGGLE_CHOOSING";
const TOGGLE_PLACING = "TOGGLE_PLACING";
const TOGGLE_TARGETING = "TOGGLE_TARGETING";

// Action Creators

export function getAllCards() {
    return {
        type: GET_ALL_CARDS,
        payload: axios.get("/api/cards").then(response => response.data)
    };
}

// Initial State

const initialState = {
    cardList: [],
    isChoosing: false,
    isPlacing: false,
    isTargeting: false,
};


// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CARDS + "_PENDING":
            return Object.assign({}, state);
        case GET_ALL_CARDS + "_FULFILLED":
            return Object.assign({}, state, { cardList: action.payload });
        case TOGGLE_CHOOSING:
            return Object.assign({}, state);
        case TOGGLE_PLACING:
            return Object.assign({}, state);
        case TOGGLE_TARGETING:
            return Object.assign({}, state);
        default:
            return state;
    }
}
import axios from "axios";

// Action Constants
const GET_ALL_CARDS = "GET_ALL_CARDS";
const TOGGLE_CHOOSING = "TOGGLE_CHOOSING";
const TOGGLE_PLACING = "TOGGLE_PLACING";
const TOGGLE_TARGETING = "TOGGLE_TARGETING";
const ADD_ENEMY_MELEE = "ADD_ENEMY_MELEE";
const ADD_ENEMY_RANGED = "ADD_ENEMY_RANGED";
const ADD_ENEMY_SIEGE = "ADD_ENEMY_SIEGE";
const ADD_PLAYER_MELEE = "ADD_PLAYER_MELEE";
const ADD_PLAYER_RANGED = "ADD_PLAYER_RANGED";
const ADD_PLAYER_SIEGE = "ADD_PLAYER_SIEGE";

// Action Creators

export function getAllCards() {
    return {
        type: GET_ALL_CARDS,
        payload: axios.get("/api/cards").then(response => response.data)
    };
}

export function toggleChoosing() {
    return {
        type: TOGGLE_CHOOSING,
        payload: null
    };
}

export function togglePlacing() {
    return {
        type: TOGGLE_PLACING,
        payload: null
    };
}

export function toggleTargeting() {
    return {
        type: TOGGLE_TARGETING,
        payload: null
    };
}

export function addPlayerMelee(id) {
    return {
        type: ADD_PLAYER_MELEE,
        payload: null
    };
}

export function addPlayerRanged(id) {
    return {
        type: ADD_PLAYER_RANGED,
        payload: null
    };
}

export function addPlayerSiege(id) {
    return {
        type: ADD_PLAYER_SIEGE,
        payload: null
    };
}

export function addEnemyMelee(id) {
    return {
        type: ADD_ENEMY_MELEE,
        payload: null
    };
}

export function addEnemyRanged(id) {
    return {
        type: ADD_ENEMY_RANGED,
        payload: null
    };
}

export function addEnemySiege(id) {
    return {
        type: ADD_ENEMY_SIEGE,
        payload: null
    };
}

// Initial State

const initialState = {
    cardList: [],
    isChoosing: false,
    isPlacing: false,
    isTargeting: false,
    enemyMelee:[],
    enemyRanged:[],
    enemySiege:[],
    playerMelee:[],
    playerRanged:[],
    playerSiege:[],
};


// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CARDS + "_PENDING":
            return Object.assign({}, state);
        case GET_ALL_CARDS + "_FULFILLED":
            return Object.assign({}, state, { cardList: action.payload });
        case TOGGLE_CHOOSING:
            return Object.assign({}, state, {isChoosing: !state.isChoosing});
        case TOGGLE_PLACING:
            return Object.assign({}, state, {isPlacing: !state.isPlacing});
        case TOGGLE_TARGETING:
            return Object.assign({}, state, {isTargeting: !state.isTargeting});
        default:
            return state;
    }
}
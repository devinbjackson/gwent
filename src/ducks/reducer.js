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
const HOLD = "HOLD";

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
        payload: id
    };
}

export function addPlayerRanged(id) {
    return {
        type: ADD_PLAYER_RANGED,
        payload: id
    };
}

export function addPlayerSiege(id) {
    return {
        type: ADD_PLAYER_SIEGE,
        payload: id
    };
}

export function addEnemyMelee(id) {
    return {
        type: ADD_ENEMY_MELEE,
        payload: id
    };
}

export function addEnemyRanged(id) {
    return {
        type: ADD_ENEMY_RANGED,
        payload: id
    };
}

export function addEnemySiege(id) {
    return {
        type: ADD_ENEMY_SIEGE,
        payload: id
    };
}

export function hold(id) {
    return {
        type: HOLD,
        payload: (typeof id === "number") ? id : null
    };
}

// Initial State

const initialState = {
    cardList: [],
    isChoosing: false,
    isPlacing: false,
    isTargeting: false,
    holding: null,
    enemyMelee: [],
    enemyRanged: [],
    enemySiege: [],
    playerMelee: [],
    playerRanged: [],
    playerSiege: [],
    playerTotal: 0,
    enemyTotal: 0,
};


// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CARDS + "_PENDING":
            return Object.assign({}, state);
        case GET_ALL_CARDS + "_FULFILLED":
            return Object.assign({}, state, { cardList: action.payload });
        case TOGGLE_CHOOSING:
            return Object.assign({}, state, { isChoosing: !state.isChoosing });
        case TOGGLE_PLACING:
            return Object.assign({}, state, { isPlacing: !state.isPlacing });
        case TOGGLE_TARGETING:
            return Object.assign({}, state, { isTargeting: !state.isTargeting });
        case HOLD:
            return Object.assign({}, state, { holding: action.payload });
        case ADD_ENEMY_MELEE:
            return Object.assign({}, state, { enemyMelee: state.enemyMelee.concat(action.payload) , 
                enemyTotal: state.playerTotal + state.cardList[action.payload].strength});
        case ADD_ENEMY_RANGED:
            return Object.assign({}, state, { enemyRanged: state.enemyRanged.concat(action.payload),
                 enemyTotal: state.playerTotal + state.cardList[action.payload].strength });
        case ADD_ENEMY_SIEGE:
            return Object.assign({}, state, { enemySiege: state.enemySiege.concat(action.payload),
                 enemyTotal: state.playerTotal + state.cardList[action.payload].strength });
        case ADD_PLAYER_MELEE:
            return Object.assign({}, state, { playerMelee: state.playerMelee.concat(action.payload), 
                playerTotal: state.playerTotal + state.cardList[action.payload].strength });
        case ADD_PLAYER_RANGED:
            return Object.assign({}, state, { playerRanged: state.playerRanged.concat(action.payload), 
                playerTotal: state.playerTotal + state.cardList[action.payload].strength});
        case ADD_PLAYER_SIEGE:
            return Object.assign({}, state, { playerSiege: state.playerSiege.concat(action.payload), 
                playerTotal: state.playerTotal + state.cardList[action.payload].strength});
        default:
            return state;
    }
}
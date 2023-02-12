import {
    ACTION_OVERFLOW_TIMER,
    ACTION_PAUSE_TIMER,
    ACTION_RESET_TIMER,
    ACTION_SET_TIME_NOW,
    ACTION_START_CONTINUE_TIMER
} from "../actions/timerActions";

const defaultState = {
    start: false,
    msTime: 0,
    secTime: 0,
    minTime: 0,
    timeStart: 0,
    timeNow: 0,
    overflow: false,
}

const timerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_START_CONTINUE_TIMER:
            return {...state, timeStart: action.payload, start: true};
        case ACTION_PAUSE_TIMER:
            return {...state, start: false};
        case ACTION_RESET_TIMER:
            return {...state, ...defaultState}
        case ACTION_SET_TIME_NOW:
            return {...state, timeNow: action.payload}
        case ACTION_OVERFLOW_TIMER:
            return {...state, start: false, overflow: true}
        default:
            return state;
    }
}

export default timerReducer;
import {
    ACTION_RESET_TIMER,
    ACTION_START_CONTINUE_TIMER,
    ACTION_PAUSE_TIMER,
    ACTION_SET_TIME_NOW,
    ACTION_OVERFLOW_TIMER
} from "../actions/timerActions";

export const actionStartTimer = (time) => {
    return {
        type: ACTION_START_CONTINUE_TIMER, payload: time
    }
}

export const actionResetTimer = () => {
    return {
        type: ACTION_RESET_TIMER,
    }
}

export const actionContinueTimer = (time) => {
    return {
        type: ACTION_START_CONTINUE_TIMER, payload: time
    }
}

export const actionPauseTimer = () => {
    return {
        type: ACTION_PAUSE_TIMER,
    }
}

export const actionSetTimeNow = (time) => {
    return {
        type: ACTION_SET_TIME_NOW, payload: time
    }
}

export const actionOverflowTimer = () => {
    return {
        type: ACTION_OVERFLOW_TIMER
    }
}
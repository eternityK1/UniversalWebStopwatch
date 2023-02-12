import {ACTION_SET_MAX_VALUE_GEN, ACTION_SET_MIN_VALUE_GEN, ACTION_SET_GEN_VALUE} from "../actions/randomizerActions";

const randomizerActionsSetMin = (payload) => {
    return {type: ACTION_SET_MIN_VALUE_GEN, payload: payload};
}

const randomizerActionsSetMax = (payload) => {
    return {type: ACTION_SET_MAX_VALUE_GEN, payload: payload};
}

const randomizerActionsSetResult = (payload) => {
    return {type: ACTION_SET_GEN_VALUE, payload: payload};
}

export {randomizerActionsSetMin, randomizerActionsSetMax, randomizerActionsSetResult};
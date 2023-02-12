import {createStore, combineReducers} from "redux";
import randomizerReducer from "./reducers/randomizerReducer";
import timerReducer from "./reducers/timerReducer";

const rootReducer = combineReducers({timer: timerReducer, randomizer: randomizerReducer});
const store = createStore(rootReducer);

export default store;
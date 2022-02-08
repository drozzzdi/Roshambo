import drawReducer from "./draw";
import loseReducer from "./lose";
import winnReducer from "./winn";
import choiceReducer from "./choice";
import { combineReducers } from "redux";

const allReducers=combineReducers({
    draw: drawReducer,
    lose: loseReducer,
    winn: winnReducer,
    choice: choiceReducer
});

export default allReducers;
import { combineReducers } from "redux";
import gameDetailReducer from "./gameDetailReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    gameDetail: gameDetailReducer
})

export default rootReducer;
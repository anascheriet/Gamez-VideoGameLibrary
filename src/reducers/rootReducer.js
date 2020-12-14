import { combineReducers } from "redux";
import gameDetailReducer from "./gameDetailReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    game: gameDetailReducer
})

export default rootReducer;
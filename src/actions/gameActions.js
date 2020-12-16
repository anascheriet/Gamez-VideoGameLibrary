import axios from "axios"
import api from "../api";



//Action Creator
export const loadGames = () => async (dispatch) => {
    //Fetch axios
    //console.log(popularGamesUrl);
    const popularData = await axios.get(api.popularGamesUrl);
    const newGamesData = await axios.get(api.newGamesUrl);
    const upcomingGamesData = await axios.get(api.upcomingGamesUrl);

    dispatch({
        type: "Fetch_Games",
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(api.searchGameUrl(game_name));

    dispatch({
        type: "Fetch_Searched",
        payload: {
            searched: searchedGames.data.results
        }
    })
}
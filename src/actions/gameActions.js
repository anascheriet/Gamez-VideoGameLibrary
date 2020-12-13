import axios from "axios"
import popularGamesUrl from "../api";



//Action Creator
export const loadGames = () => async (dispatch) => {
    //Fetch axios
    //console.log(popularGamesUrl);
    const popularData = await axios.get(popularGamesUrl);
    dispatch({
        type: "Fetch_Games",
        payload: {
            popular: popularData.data.results,
        }
    })
} 
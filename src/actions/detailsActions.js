import axios from "axios"
import api from "../api"

export const loadDetail = (id) => async (dispatch) => {
    const gameDetails = await axios.get(api.gameDetailsUrl(id));
    const gameScreens = await axios.get(api.gameScreenshotsUrl(id));
    dispatch({
        type: "Get_Detail",
        payload: {
            game: gameDetails.data,
            screen: gameScreens.data.results
        }
    })
}
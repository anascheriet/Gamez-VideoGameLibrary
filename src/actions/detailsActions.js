import axios from "axios"
import api from "../api"

const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "Loading_Detail"
    })
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


const exitcard = () => async (dispatch) => {
    dispatch({
        type: "Loading_Detail"
    })
}

export default {
    loadDetail,
    exitcard
}
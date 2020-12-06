const initialState = {
    popular: [],
    newGames: [],
    uppcoming: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Fetch_Games": return { ...state }
        default: return { ...state }
    }
}

//Action Creator
const fetchGames = () => {
    return {
        type: "Fetch_Games", 
    }
}


export default gamesReducer;
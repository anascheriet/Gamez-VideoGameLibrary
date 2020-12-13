const initialState = {
    popular: [],
    newGames: [],
    uppcoming: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Fetch_Games": return { ...state, popular: action.payload.popular }
        default: return { ...state }
    }
}

export default gamesReducer;
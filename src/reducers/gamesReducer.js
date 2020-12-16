const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Fetch_Games":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming
            }
        case "Fetch_Searched":
            return {
                ...state,
                searched: action.payload.searched
            }

        case "Clear_Searched":
            return {
                ...state,
                searched: []
            }
        default: return { ...state }
    }
}

export default gamesReducer;
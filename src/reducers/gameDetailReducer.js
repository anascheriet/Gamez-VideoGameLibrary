const initialState = {
    game: { platforms: [] },
    screenshots: [],
    isLoading: true
}


const gameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Get_Detail":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screen,
                isLoading: false
            };
        case "Loading_Detail":
            return {
                ...state,
                isLoading: true
            }
        default:
            return { ...state }
    }
}

export default gameDetailReducer;
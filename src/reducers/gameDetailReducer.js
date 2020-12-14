const initialState = {
    game: {},
    screenshots: {}
}


const gameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Get_Detail":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screen
            }
        default:
            return { ...state }
    }
}

export default gameDetailReducer;
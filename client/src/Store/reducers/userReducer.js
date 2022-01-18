import { types } from "../actions/types";

const initialState = {
    username: null,
    isAuth: false,
    token: null,
    isLoading: false,
    img: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
    
        default:
            return state
    }
}
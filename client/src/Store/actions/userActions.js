
import { types } from "./types";

export const setLoading = () => (state) => {
    console.log(state);
    return (dispatch) => {
        dispatch({
            type: types.LOADING,
            payload: state
        })
    }
}
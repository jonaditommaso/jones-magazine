import { ADD_TO_BASKET } from "./types";

export const addToBasket = (title) => dispatch => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: title
    });
}
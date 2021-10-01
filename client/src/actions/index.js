import { 
    ADD_TO_BASKET, 
    REMOVE_FROM_BASKET, 
    EMPTY_BASKET, 
    SIGN_IN_GOOGLE, 
    SIGN_OUT_GOOGLE, 
    GET_NEWS,
    GET_CONVERSATION } from "./types";

export const addToBasket = (name, price, author, src, alt, id) => dispatch => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: {
            name, 
            price, 
            author, 
            src, 
            alt,
            id
        }
    });
}

export const removeFromBasket = (id) => dispatch => {
    dispatch({
        type: REMOVE_FROM_BASKET,
        id
    });
}

export const emptyBasket = () => dispatch => {
    dispatch({
        type: EMPTY_BASKET
    });
}

export const signInGoogle = (userId)=> {
    return {
        type: SIGN_IN_GOOGLE,
        payload: userId
    }
}

export const signOutGoogle = ()=> {
    return {
        type: SIGN_OUT_GOOGLE
    }
}

export const getNews = (title, src, content, description) => dispatch => {
    dispatch({
        type: GET_NEWS,
        payload: {
            title, 
            src, 
            content,
            description
        }
    });
}

export const getConversation = conversation => dispatch => {
    dispatch({
        type: GET_CONVERSATION,
        payload: conversation
    })
}
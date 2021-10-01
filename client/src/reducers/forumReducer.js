import { GET_CONVERSATION } from '../actions/types';

const INITIAL_STATE = { conversation: null };

export const forumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CONVERSATION:
            return { ...state, conversation: action.payload }
    
        default:
            return state;
    }
}
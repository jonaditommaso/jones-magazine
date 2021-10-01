import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../actions/types';

export const initialState = {
    basketList: []
}


export default ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return { ...state, basketList: [...state.basketList, action.payload]};
            break;
    
        case REMOVE_FROM_BASKET:
            let newBasket = [...state.basketList];
            const index = state.basketList.findIndex((basketItem)=> basketItem.id === action.id)
            if (index >=0) {
                newBasket.splice(index, 1)
            } 
            else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in cart!`)
            }
            return { ...state, basketList: newBasket};

        case EMPTY_BASKET:
            return { ...state, basketList: [] }

        default: 
            return state
            break;
    }
}
import { ADD_TO_BASKET } from '../actions/types';

export const initialState = {
    basketList: []
}


export default ( state = initialState, action ) => {
    if (action.type === ADD_TO_BASKET) {
        return { ...state, basketList: [...state.basketList, action.payload]};
    }
    return state;
}

    // else if (action.type === REMOVE_FROM_CART){
    //     let newCart = [...state.cartList];
    //     const index = state.cartList.findIndex((cartItem)=> cartItem.id === action.id)

    //     if (index >=0) {
    //         newCart.splice(index, 1)
    //     } 
    //     else {
    //         console.warn(`Cant remove product (id: ${action.id}) as its not in cart!`)
    //     }
    //     return { ...state, cartList: newCart};
    // }
                  
    // else if(action.type === EMPTY_CART) {
    //     return { ...state, cartList: [] }
    // }
    

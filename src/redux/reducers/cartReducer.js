import { ActionTypes } from "../constants/actions-type";


const initialState = {
    cartProduct: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cartProduct: [...state.cartProduct, action.payload] };

        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cartProduct: state.cartProduct.filter(i => i.id !== action.payload) }

        default:
            return state;
    }
}
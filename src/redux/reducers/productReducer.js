import { ActionTypes } from "../constants/actions-type";

const initialState = {}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, allProduct: action.payload }

        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProduct: action.payload };

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, selectedProduct: '' };

        default:
            return state;
    }
}

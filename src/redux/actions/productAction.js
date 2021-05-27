import { ActionTypes } from "../constants/actions-type"

export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products,
    }
}

export const selectedProduct = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}
export const addToCart = product => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    }
}
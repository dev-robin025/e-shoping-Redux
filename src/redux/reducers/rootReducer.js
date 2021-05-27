import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

export const allReducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
})
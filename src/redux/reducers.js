import { RECEIVE_PRODUCTS } from "./actions";
import { combineReducers } from "redux";

let productId = 0;
export function productsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products: productsReducer
});
export default rootReducer;

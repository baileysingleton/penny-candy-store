import { RECEIVE_PRODUCTS } from "./actions";

let productId = 0;
function products(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      // get all products
      return [{}];
    default:
      return state;
  }
}

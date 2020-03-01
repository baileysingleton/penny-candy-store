export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

import * as products from "../src/data/products";
let inventory = JSON.parse(products);

export function receiveProducts(products) {
  return { type: RECEIVE_PRODUCTS, products };
}

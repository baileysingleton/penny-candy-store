import { createStore } from "redux";
import { productsReducer } from "./reducers";

const store = createStore(productsReducer);

export default store;

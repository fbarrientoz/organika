

import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProducts";
import todoTaskReducer from "./todoTask";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductsReducer,
  todo: todoTaskReducer,
});

export default rootReducer;


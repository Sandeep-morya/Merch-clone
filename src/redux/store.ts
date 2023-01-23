import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/redcuer";
import { ProductReducer } from "./product/reducer";

const rootReducer = {
	product: ProductReducer,
	cart: cartReducer,
};
export type rootReducerType = typeof rootReducer;
export const store = legacy_createStore(
	combineReducers(rootReducer),
	applyMiddleware(thunk),
);
export type storeType = ReturnType<typeof store.getState>;

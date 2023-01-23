import { GET_CART } from "./actionTypes";
import { cartItemType } from "@/Types/cart";
import { AnyAction } from "redux";
const initalState: cartItemType[] | [] = [];
export type cartStateType = typeof initalState;

export const cartReducer = (state = initalState, action: AnyAction) => {
	switch (action.type) {
		case GET_CART:
			return action.payload;
		default:
			return state;
	}
};

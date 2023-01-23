import { cartItemType } from "@/Types/cart";
import { AxiosResponse } from "axios";
import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_CART } from "./actionTypes";
import { cartStateType } from "./redcuer";
export const getCartItems =
	(): any => async (dispatch: ThunkDispatch<cartStateType, {}, AnyAction>) => {
		const { data }: AxiosResponse<cartItemType[]> = await axios.get(
			`http://localhost:8080/carts`,
		);
		dispatch({ type: GET_CART, payload: data });
	};

export const deleteCartItems =
	(id: number | undefined): any =>
	async (dispatch: ThunkDispatch<cartStateType, {}, AnyAction>) => {
		await axios.delete(`http://localhost:8080/carts/${id}`);
		dispatch(getCartItems());
	};

export const updateCartItems =
	(options: cartItemType): any =>
	async (dispatch: ThunkDispatch<cartStateType, {}, AnyAction>) => {
		await axios.post(`http://localhost:8080/carts`, options);
		dispatch(getCartItems());
	};

export const patchCartItems =
	<p, q>(id: p, options: q): any =>
	async (dispatch: ThunkDispatch<cartStateType, {}, AnyAction>) => {
		await axios.patch(`http://localhost:8080/carts/${id}`, options);
		dispatch(getCartItems());
	};

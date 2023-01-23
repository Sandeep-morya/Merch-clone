import { productItemType } from "@/Types/product";
import axios, { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
	PRODUCTS_LOADING,
	PRODUCTS_ERROR,
	PRODUCT_SUCCESS,
} from "./actionTypes";

export interface obj {
	type: string;
	payload?: productItemType[] | number | string | [];
}

export const getProducts =
	():any=>
	async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		dispatch({ type: PRODUCTS_LOADING });
		try {
			const { data }: AxiosResponse<productItemType[]> = await axios.get(
				`http://localhost:8080/products`,
			);
			dispatch({ type: PRODUCT_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: PRODUCTS_ERROR });
		}
	};

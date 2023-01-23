import {
	PRODUCTS_LOADING,
	PRODUCTS_ERROR,
	PRODUCT_SUCCESS,
} from "./actionTypes";
import { productItemType } from "@/Types/product";
import { AnyAction } from "redux";
export interface stateType {
	loading: boolean;
	error: boolean;
	data: productItemType[] | [];
}
const initialState: stateType = {
	loading: false,
	error: false,
	data: [],
};

export const ProductReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case PRODUCTS_LOADING:
			return{
                ...state,
                loading:true,
                error:false
            }
		case PRODUCTS_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case PRODUCT_SUCCESS:
			return {
                loading:false,
                error:false,
                data:action.payload
            }
		default:
			return state;
	}
};

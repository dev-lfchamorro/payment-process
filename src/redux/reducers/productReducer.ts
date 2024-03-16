import * as actionTypes from "../types/productTypes";
import { ProductActionTypes } from "../types/productTypes";

const initialState = {
  products: [],
  selectedProductId: null,
};

const productsReducer = (state = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProductId: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;

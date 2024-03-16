import { ProductAction } from "../actions/productActions";
import * as actionTypes from "../types/productTypes";

const initialState = {
  products: [],
  selectedProductId: null,
};

const productsReducer = (state = initialState, action: ProductAction) => {
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

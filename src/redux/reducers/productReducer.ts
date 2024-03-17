import { Product } from "../../types";
import {
  ADD_PRODUCT,
  ProductActionTypes,
  SELECT_PRODUCT,
} from "../types/productTypes";

export type IProductState = {
  products: Product[];
  selectedProductId: string;
};

const initialState: IProductState = {
  products: [],
  selectedProductId: "",
};

const productReducer = (
  state: IProductState = initialState,
  action: ProductActionTypes
): IProductState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload],
      };

    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProductId: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;

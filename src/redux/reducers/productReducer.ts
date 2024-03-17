import { Product, ProductsMap } from "../../types";
import {
  ProductActionTypes,
  SELECT_PRODUCT,
  SET_PRODUCT_LIST,
} from "../types/productTypes";

export type IProductState = {
  products: ProductsMap | null;
  selectedProduct: Product | null;
};

const initialState: IProductState = {
  products: null,
  selectedProduct: null,
};

const productReducer = (
  state: IProductState = initialState,
  action: ProductActionTypes
): IProductState => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;

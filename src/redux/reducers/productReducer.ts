import { Product } from "../../types";
import { ProductsMap } from "../../views/Products/constants";
import { ProductActionTypes, SELECT_PRODUCT } from "../types/productTypes";

export type IProductState = {
  products: ProductsMap[];
  selectedProduct: Product | null;
};

const initialState: IProductState = {
  products: [],
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

    default:
      return state;
  }
};

export default productReducer;

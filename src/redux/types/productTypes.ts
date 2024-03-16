import { Products } from "../../types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";

interface AddProduct {
  type: typeof ADD_PRODUCT;
  payload: Products;
}

interface SelectProduct {
  type: typeof SELECT_PRODUCT;
  payload: string;
}

export type ProductActionTypes = AddProduct | SelectProduct;

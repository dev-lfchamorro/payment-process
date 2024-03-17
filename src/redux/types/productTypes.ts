import { Product } from "../../types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";

interface SelectProduct {
  type: typeof SELECT_PRODUCT;
  payload: Product;
}

export type ProductActionTypes = SelectProduct;

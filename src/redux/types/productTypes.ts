import { Product, ProductsMap } from "../../types";

export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

interface SelectProduct {
  type: typeof SELECT_PRODUCT;
  payload: Product;
}

interface SetProductList {
  type: typeof SET_PRODUCT_LIST;
  payload: ProductsMap;
}

export type ProductActionTypes = SelectProduct | SetProductList;

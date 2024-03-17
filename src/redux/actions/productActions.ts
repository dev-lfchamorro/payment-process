import { Product, ProductsMap } from "../../types";
import { SELECT_PRODUCT, SET_PRODUCT_LIST } from "../types/productTypes";

export const selectProduct = (productData: Product) => ({
  type: SELECT_PRODUCT,
  payload: productData,
});

export const setProductLit = (productList: ProductsMap) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

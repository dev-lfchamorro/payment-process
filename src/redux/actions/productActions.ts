import { Product } from "../../types";
import { ADD_PRODUCT, SELECT_PRODUCT } from "../types/productTypes";

export const addProduct = (productData: Product) => ({
  type: ADD_PRODUCT,
  payload: productData,
});

export const selectProduct = (productId: string) => ({
  type: SELECT_PRODUCT,
  payload: productId,
});

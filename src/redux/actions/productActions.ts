import { Product } from "../../types";
import { SELECT_PRODUCT } from "../types/productTypes";

export const selectProduct = (productData: Product) => ({
  type: SELECT_PRODUCT,
  payload: productData,
});

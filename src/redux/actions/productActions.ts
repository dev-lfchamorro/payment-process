import { Products } from "../../types";
import {
  ADD_PRODUCT,
  ProductActionTypes,
  SELECT_PRODUCT,
} from "../types/productTypes";

export const addProduct = (productData: Products): ProductActionTypes => ({
  type: ADD_PRODUCT,
  payload: productData,
});

export const selectProduct = (productId: string): ProductActionTypes => ({
  type: SELECT_PRODUCT,
  payload: productId,
});

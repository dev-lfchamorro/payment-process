import { Products } from "../../types";
import * as actionTypes from "./../types/productTypes";

interface AddProduct {
  type: typeof actionTypes.ADD_PRODUCT;
  payload: Products;
}

interface selectProduct {
  type: typeof actionTypes.SELECT_PRODUCT;
  payload: string;
}

export type ProductAction = AddProduct | selectProduct;

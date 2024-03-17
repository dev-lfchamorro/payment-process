import { EProducsSection } from "../enums";
import { Product } from "./products";

export type ProductsMap = {
  [key in EProducsSection]: Product[];
};

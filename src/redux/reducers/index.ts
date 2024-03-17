import { combineReducers } from "redux";
import paymentReducer, { IPaymentState } from "./paymentReducer";
import productReducer, { IProductState } from "./productReducer";

export interface IRootState {
  payments: IPaymentState;
  products: IProductState;
}

export const rootReducer = combineReducers({
  payments: paymentReducer,
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

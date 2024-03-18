import { PaymentInfo, UserInfo } from "../../types";
import {
  PaymentActionTypes,
  SET_PAYMENT_INFO,
  SET_USER_INFO,
  SHOW_SUMMARY,
} from "../types";

export type IPaymentState = {
  userInfo: UserInfo | null;
  paymentInfo: PaymentInfo | null;
  showSummary: boolean;
};

const initialState: IPaymentState = {
  paymentInfo: null,
  userInfo: null,
  showSummary: false,
};

const paymentReducer = (
  state: IPaymentState = initialState,
  action: PaymentActionTypes
): IPaymentState => {
  switch (action.type) {
    case SET_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: action.payload,
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case SHOW_SUMMARY:
      return {
        ...state,
        showSummary: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;

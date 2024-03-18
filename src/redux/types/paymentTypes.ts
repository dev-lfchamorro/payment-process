import { PaymentInfo, UserInfo } from "../../types";

export const SET_USER_INFO = "SET_USER_INFO";
export const SET_PAYMENT_INFO = "SET_PAYMENT_INFO";

interface SetUserInfo {
  type: typeof SET_USER_INFO;
  payload: UserInfo;
}

interface SetPaymentInfo {
  type: typeof SET_PAYMENT_INFO;
  payload: PaymentInfo;
}

export type PaymentActionTypes = SetUserInfo | SetPaymentInfo;

import { PaymentInfo, UserInfo } from "../../types";

export const SET_USER_INFO = "SET_USER_INFO";
export const SET_PAYMENT_INFO = "SET_PAYMENT_INFO";
export const SHOW_SUMMARY = "SHOW_SUMMARY";

interface SetUserInfo {
  type: typeof SET_USER_INFO;
  payload: UserInfo;
}

interface SetPaymentInfo {
  type: typeof SET_PAYMENT_INFO;
  payload: PaymentInfo;
}

interface ShowSummary {
  type: typeof SHOW_SUMMARY;
  payload: boolean;
}

export type PaymentActionTypes = SetUserInfo | SetPaymentInfo | ShowSummary;

import { PaymentInfo, UserInfo } from "../../types";
import { SET_PAYMENT_INFO, SET_USER_INFO, SHOW_SUMMARY } from "../types";

export const setUserInfo = (userInfoData: UserInfo) => ({
  type: SET_USER_INFO,
  payload: userInfoData,
});

export const setPaymentInfo = (paymentInfoData: PaymentInfo) => ({
  type: SET_PAYMENT_INFO,
  payload: paymentInfoData,
});

export const showSummary = (showSummary: boolean) => ({
  type: SHOW_SUMMARY,
  payload: showSummary,
});

export type PaymentInfo = {
  cardNumber: string;
  cardUsername: string;
  cvc: string;
  document: string;
  documentType: string;
  expiryMonth: string;
  expiryYear: string;
  installments: string;
};

export type UserInfo = {
  email: string;
  fullname: string;
  phoneNumber: string;
  phoneCode: string;
};

export type SummaryPayment = {
  email: string;
  fullname: string;
  phoneNumber: string;
  cardNumber: string;
  document: string;
  documentType: string;
  installments: string;
};

export type TransactionStatus = {
  cardNumber: string;
  document: string;
  documentType: string;
  email: string;
  fullname: string;
  idTransaction: string;
  phoneNumber: string;
  status: "success" | "failed" | "pending";
};

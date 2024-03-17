export type PaymentInfo = {
  cardNumber: string;
  cardUsername: string;
  cvc: string;
  document: number;
  documentType: string;
  expiryMonth: string;
  expiryYear: string;
  installments: number;
};

export type UserInfo = {
  email: string;
  fullname: string;
  phoneNumber: string;
};

export enum ValidCreditCard {
  Visa = "Visa",
  Mastercard = "Mastercard",
  Unknown = "Unknown",
}

export const validCreditCard = (numero: string): ValidCreditCard => {
  const visaPattern = /^4\d{15}$/;
  const mastercardPattern = /^5\d{15}$/;

  if (visaPattern.test(numero)) {
    return ValidCreditCard.Visa;
  } else if (mastercardPattern.test(numero)) {
    return ValidCreditCard.Mastercard;
  } else {
    return ValidCreditCard.Unknown;
  }
};

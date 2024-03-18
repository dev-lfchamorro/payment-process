export const isValidPhone = (phone: string) => {
  return /^\d{10}$/.test(phone);
};

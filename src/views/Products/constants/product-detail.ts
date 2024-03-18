import { ListItemTextProps } from "../../../components/ListItemText";
import { formatNumber, validCreditCard } from "../../../helpers";
import { Product, SummaryPayment, TransactionStatus } from "../../../types";

export const infoProduct = (product: Product): ListItemTextProps => {
  const { brand, category, discount, name } = product || {};

  return {
    itemList: [
      { title: "Marca", value: brand },
      { title: "Categoría", value: category },
      { title: "", value: "", discount },
    ],
    title: name,
  };
};

export const infoProductValues = (product: Product): ListItemTextProps => {
  const { shipment, price } = product || {};
  const shipmentValue = shipment || 0;

  return {
    itemList: [
      { title: "Sub-total", value: `$ ${formatNumber(price || 0)}` },
      { title: "Costo de envío", value: `$ ${formatNumber(shipment || 0)}` },
      {
        title: "Total",
        value: `$ ${formatNumber(price + shipmentValue)}`,
      },
    ],
    title: "Info. valores",
  };
};

export const infoPayment = (payment: SummaryPayment): ListItemTextProps => {
  const {
    cardNumber,
    document,
    documentType,
    email,
    fullname,
    installments,
    phoneNumber,
  } = payment || {};

  return {
    itemList: [
      { title: "Nombre", value: fullname },
      { title: "Documento", value: `${documentType} ${document}` },
      { title: "Email", value: email },
      { title: "Teléfono", value: phoneNumber },
      {
        title: validCreditCard(cardNumber),
        value: `******${cardNumber.slice(-4)}`,
      },
      {
        title: "Cuotas",
        value: installments,
      },
    ],
    title: "Info. pago",
  };
};

export const infoTransaction = (
  transaction: TransactionStatus
): ListItemTextProps => {
  const {
    cardNumber,
    document,
    documentType,
    email,
    fullname,
    phoneNumber,
    idTransaction,
    status,
  } = transaction || {};

  return {
    itemList: [
      { title: "Nombre", value: fullname },
      { title: "Documento", value: `${documentType} ${document}` },
      { title: "Email", value: email },
      { title: "Teléfono", value: phoneNumber },
      {
        title: validCreditCard(cardNumber),
        value: `******${cardNumber.slice(-4)}`,
      },
      {
        title: "ID Transacción",
        value: idTransaction,
      },
      {
        title: "Fecha",
        value: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      },
      {
        title: "Estado",
        value: status.toUpperCase(),
      },
    ],
    title: "Detalle de la transacción",
  };
};

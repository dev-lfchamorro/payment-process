import { ListItemTextProps } from "../../../components/ListItemText";
import { formatNumber } from "../../../helpers";
import { Product } from "../../../types";

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

  return {
    itemList: [
      { title: "Sub-total", value: formatNumber(price || 0) },
      { title: "Costo de envío", value: formatNumber(shipment || 0) },
      {
        title: "Total",
        value: `${shipment && formatNumber(price + shipment)}`,
      },
    ],
    title: "Info. valores",
  };
};

import { EMenuOptions } from "../enums";
import { paths } from "./paths";

export type MenuOptions = {
  redirect: string;
  text: EMenuOptions;
};

export const menuOptions: MenuOptions[] = [
  { redirect: paths.products, text: EMenuOptions.products },
  { redirect: paths.contact, text: EMenuOptions.contact },
];

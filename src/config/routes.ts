import { lazy } from "react";
import { RoutesConfig } from "../types";
import { paths } from "../constants";

const Contact = lazy(() => import("../views/Contact"));
const Products = lazy(() => import("../views/Products"));

export const routes: RoutesConfig[] = [
  {
    path: paths.products,
    component: Products,
  },
  {
    path: paths.contact,
    component: Contact,
  },
  {
    path: paths.notFound,
    component: Products,
  },
];

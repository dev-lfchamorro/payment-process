import { lazy } from "react";
import { paths } from "../constants";
import { RoutesConfig } from "../types";

const Contact = lazy(() => import("../views/Contact"));
const Products = lazy(() => import("../views/Products"));
const TransactionStatus = lazy(() => import("../views/TransactionStatus"));
const ProductDetail = lazy(
  () => import("../views/Products/components/ProductDetail")
);

export const routes: RoutesConfig[] = [
  {
    path: paths.products,
    component: Products,
  },
  {
    path: paths.productDetail,
    component: ProductDetail,
  },
  {
    path: paths.contact,
    component: Contact,
  },
  {
    path: paths.transactionStatus,
    component: TransactionStatus,
  },
  {
    path: paths.notFound,
    component: Products,
  },
];

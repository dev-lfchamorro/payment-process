import React from "react";
import { Product } from "../../types";
import ProductCard from "../ProductCard";
import "./styles.scss";

type SectionProductListProps = {
  title?: string;
  productList: Product[];
};

const SectionProductList: React.FC<SectionProductListProps> = ({
  productList,
  title,
}) => {
  return (
    <section className="section-products">
      <h2>{title}</h2>
      <ProductCard productList={productList} />
    </section>
  );
};

export default SectionProductList;

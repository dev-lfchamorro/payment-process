import React from "react";
import { Products } from "../../types";
import ProductCard from "../ProductCard";
import "./styles.scss";

type SectionProductListProps = {
  title: string;
  productList: Products[];
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

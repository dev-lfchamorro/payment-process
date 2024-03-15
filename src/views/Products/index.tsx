import React from "react";
import CoverContent from "../../components/CoverContent/idex";
import SectionProductList from "../../components/SectionProductList";
import Header from "../../components/common/Header";
import ImgProducts from "./../../assets/images/products.avif";
import { highlightedProducts } from "./constants";
import "./styles.scss";
import Footer from "../../components/common/Footer";

const Products: React.FC = () => {
  const highlightedList = highlightedProducts.highlighted || [];
  const offerList = highlightedProducts.offer || [];

  return (
    <div className="products-container">
      <Header />

      <CoverContent bgImg={ImgProducts}>
        <div className="cover-content">Escoge un estilo vibrante</div>
      </CoverContent>

      <SectionProductList
        productList={highlightedList}
        title="Deslúmbrate con nuestros productos destados"
      />

      <SectionProductList
        productList={offerList}
        title="Aprovecha nuestras ofertas"
      />

      <Footer />
    </div>
  );
};

export default Products;

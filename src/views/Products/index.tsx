import React from "react";
import CoverContent from "../../components/CoverContent/idex";
import SectionProductList from "../../components/SectionProductList";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ImgProducts from "./../../assets/images/products.avif";
import { productsData } from "./constants";
import "./styles.scss";

const Products: React.FC = () => {
  const highlightedList = productsData.highlighted || [];
  const offerList = productsData.offer || [];

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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoverContent from "../../components/CoverContent/idex";
import SectionProductList from "../../components/SectionProductList";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { setProductLit } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { ProductsMap } from "../../types";
import ImgProducts from "./../../assets/images/products.avif";
import { productsData } from "./constants";
import "./styles.scss";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  const [sectionProductList, setSectionProductList] =
    useState<ProductsMap | null>(products);

  useEffect(() => {
    if (!products) {
      dispatch(setProductLit(productsData));
      setSectionProductList(productsData);
    }

    if (products !== productsData) {
      dispatch(setProductLit(productsData));
      setSectionProductList(productsData);
    }
  }, [dispatch, products]);

  return (
    <div className="products-container">
      <Header />

      <CoverContent bgImg={ImgProducts}>
        <div className="cover-content">Escoge un estilo vibrante</div>
      </CoverContent>

      {sectionProductList && (
        <SectionProductList
          productList={sectionProductList?.highlighted}
          title="Deslúmbrate con nuestros productos destados"
        />
      )}

      {sectionProductList && (
        <SectionProductList
          productList={sectionProductList?.offer}
          title="Aprovecha nuestras ofertas"
        />
      )}

      <Footer />
    </div>
  );
};

export default Products;

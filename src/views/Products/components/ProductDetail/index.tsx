import React from "react";
import { useSelector } from "react-redux";
import Header from "../../../../components/common/Header";
import { RootState } from "../../../../redux/reducers";
import "./styles.scss";
import Footer from "../../../../components/common/Footer";

const ProductDetail: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div className="product-detail-container">
      <Header hasScrollEffect={false} />
      <div style={{ height: 78 }} />
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {products[0].name}</p>

      <Footer />
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../../../components/common/Footer";
import Header from "../../../../components/common/Header";
import { RootState } from "../../../../redux/reducers";
import "./styles.scss";

const ProductDetail: React.FC = () => {
  const { selectedProduct } = useSelector((state: RootState) => state.products);

  return (
    <div className="product-detail-container">
      <Header hasScrollEffect={false} />
      <div style={{ height: 78 }} />
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {selectedProduct?.id}</p>

      <Footer />
    </div>
  );
};

export default ProductDetail;

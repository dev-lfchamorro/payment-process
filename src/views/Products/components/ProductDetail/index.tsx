import React from "react";
import { useSelector } from "react-redux";
import BlockHeaderSpace from "../../../../components/BlockHeaderSpace";
import ListItemText from "../../../../components/ListItemText";
import Footer from "../../../../components/common/Footer";
import Header from "../../../../components/common/Header";
import { RootState } from "../../../../redux/reducers";
import { infoProduct, infoProductValues } from "../../constants";
import "./styles.scss";

const ProductDetail: React.FC = () => {
  const { selectedProduct } = useSelector((state: RootState) => state.products);
  const { image, name } = selectedProduct || {};

  return (
    <div className="product-detail-container">
      <Header hasScrollEffect={false} />

      <BlockHeaderSpace />

      <h2>Detalle del Producto</h2>

      <div className="product-detail-wrapper">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={image} alt={name} />
          </div>

          <ListItemText
            itemList={infoProduct(selectedProduct!).itemList}
            title={infoProduct(selectedProduct!).title}
          />
        </div>

        <ListItemText
          className="product-payment-method"
          itemList={infoProductValues(selectedProduct!).itemList}
          title={infoProductValues(selectedProduct!).title}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;

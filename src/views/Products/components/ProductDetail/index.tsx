import React from "react";
import { useSelector } from "react-redux";
import BlockHeaderSpace from "../../../../components/BlockHeaderSpace";
import ListItemText from "../../../../components/ListItemText";
import SectionProductList from "../../../../components/SectionProductList";
import Footer from "../../../../components/common/Footer";
import Header from "../../../../components/common/Header";
import { RootState } from "../../../../redux/reducers";
import { infoProduct, infoProductValues } from "../../constants";
import "./styles.scss";

const ProductDetail: React.FC = () => {
  const { selectedProduct, products } = useSelector(
    (state: RootState) => state.products
  );

  const { image, name } = selectedProduct || {};
  const detailProductInfo = infoProduct(selectedProduct!);
  const paymentProductInfo = infoProductValues(selectedProduct!);

  return (
    <div className="product-detail-container">
      <Header hasScrollEffect={false} />

      <BlockHeaderSpace />

      <h2 className="section-title">Detalle del Producto</h2>

      <div className="product-detail-wrapper">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={image} alt={name} />
          </div>

          <ListItemText
            itemList={detailProductInfo.itemList}
            title={detailProductInfo.title}
          />
        </div>

        <ListItemText
          className="product-payment-method"
          itemList={paymentProductInfo.itemList}
          title={paymentProductInfo.title}
        />
      </div>

      {products && (
        <div className="iteresting-products">
          <SectionProductList
            productList={products?.offer}
            title="Podría interesarte"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;

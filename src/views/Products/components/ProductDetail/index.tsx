import React, { useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "../../../../components/Backdrop/index";
import BlockHeaderSpace from "../../../../components/BlockHeaderSpace";
import Button from "../../../../components/Button";
import ListItemText from "../../../../components/ListItemText";
import Modal from "../../../../components/Modal";
import SectionProductList from "../../../../components/SectionProductList";
import Footer from "../../../../components/common/Footer";
import Header from "../../../../components/common/Header";
import { RootState } from "../../../../redux/reducers";
import { infoProduct, infoProductValues } from "../../constants";
import PaymentInfoForm from "../PaymentInfoForm";
import UserInfoForm from "../UserInfoForm";
import ImgCreditCard from "./../../../../assets/icons/credit-card.svg";
import "./styles.scss";

const ProductDetail: React.FC = () => {
  const { selectedProduct, products } = useSelector(
    (state: RootState) => state.products
  );

  const { showSummary } = useSelector((state: RootState) => state.payments);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(true);

  const { image, name } = selectedProduct || {};
  const detailProductInfo = infoProduct(selectedProduct!);
  const paymentProductInfo = infoProductValues(selectedProduct!);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

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

        <div className="pay-detail">
          <ListItemText
            className="product-payment-method"
            itemList={paymentProductInfo.itemList}
            title={paymentProductInfo.title}
          />

          <Button
            icon={ImgCreditCard}
            text="Paga con tarjeta de crédito"
            onClick={handleOpenModal}
          />
        </div>
      </div>

      {products && (
        <div className="iteresting-products">
          <SectionProductList
            productList={products?.offer}
            title="Podría interesarte"
          />
        </div>
      )}

      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
          {showInfoForm ? (
            <UserInfoForm setShowInfoForm={setShowInfoForm} />
          ) : (
            <PaymentInfoForm
              setShowInfoForm={setShowInfoForm}
              setIsOpenModal={setIsOpenModal}
            />
          )}
        </Modal>
      )}

      {showSummary && <Backdrop />}

      <Footer />
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent/idex";
import ListItemText from "../../components/ListItemText";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { paths } from "../../constants";
import IconLeft from "./../../assets/icons/arrow-left-circle.svg";
import ImgTransaction from "./../../assets/images/transaction.jpg";
import "./styles.scss";
import { infoTransaction } from "../Products/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { v4 as uuidv4 } from "uuid";

const TransactionStatus: React.FC = () => {
  const navigate = useNavigate();

  const { paymentInfo, userInfo } = useSelector(
    (state: RootState) => state.payments
  );

  const transactionStaus = infoTransaction({
    cardNumber: paymentInfo?.cardNumber || "",
    document: paymentInfo?.document || "",
    documentType: paymentInfo?.documentType || "",
    email: userInfo?.email || "",
    fullname: userInfo?.fullname || "",
    idTransaction: uuidv4(),
    phoneNumber: userInfo?.phoneNumber || "",
    status: "pending",
  });

  return (
    <div className="transaction-status-container">
      <Header />

      <CoverContent bgImg={ImgTransaction}>
        <div className="cover-content">¡Estado de la transacción!</div>
      </CoverContent>

      <div className="status-wrapper">
        <div className="icon-status">
          <img src="" alt="" />
        </div>
        <hr />

        <div className="pay-detail">
          <ListItemText
            className="product-payment-method"
            itemList={transactionStaus.itemList}
            title={transactionStaus.title}
          />

          <Button
            icon={IconLeft}
            text="Volver al comercio"
            onClick={() => navigate(paths.products)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TransactionStatus;

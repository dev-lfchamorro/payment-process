import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent/idex";
import ListItemText from "../../components/ListItemText";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { paths } from "../../constants";
import { RootState } from "../../redux/reducers";
import { infoTransaction } from "../Products/constants";
import IconLeft from "./../../assets/icons/arrow-left-circle.svg";
import ImgFailed from "./../../assets/images/status-failed.png";
import ImgPending from "./../../assets/images/status-pending.png";
import ImgSuccess from "./../../assets/images/status-success.png";
import ImgTransaction from "./../../assets/images/transaction.jpg";
import "./styles.scss";

const TransactionStatus: React.FC = () => {
  const navigate = useNavigate();

  const { paymentInfo, userInfo } = useSelector(
    (state: RootState) => state.payments
  );

  const [iconStatus, setIconStatus] = useState(ImgPending);
  const [textStatus, setTextStatus] = useState<
    "pending" | "success" | "failed"
  >("pending");

  const transactionStaus = infoTransaction({
    cardNumber: paymentInfo?.cardNumber || "",
    document: paymentInfo?.document || "",
    documentType: paymentInfo?.documentType || "",
    email: userInfo?.email || "",
    fullname: userInfo?.fullname || "",
    idTransaction: uuidv4(),
    phoneNumber: userInfo?.phoneNumber || "",
    status: textStatus,
  });

  useEffect(() => {
    if (
      paymentInfo?.cardNumber === "5532123412344697" ||
      paymentInfo?.cardNumber === "4532123412341234"
    ) {
      setIconStatus(ImgSuccess);
      setTextStatus("success");
    } else if (
      paymentInfo?.cardNumber === "5532123412344369" ||
      paymentInfo?.cardNumber === "4532123412347688"
    ) {
      setIconStatus(ImgFailed);
      setTextStatus("failed");
    } else {
      setIconStatus(ImgPending);
      setTextStatus("pending");
    }
  }, [paymentInfo?.cardNumber]);

  return (
    <div className="transaction-status-container">
      <Header />

      <CoverContent bgImg={ImgTransaction}>
        <div className="cover-content">¡Estado de la transacción!</div>
      </CoverContent>

      <div className="status-wrapper">
        <div className="icon-status">
          <img src={iconStatus} alt={textStatus} width={120} height={120} />
        </div>

        <div className="pay-detail">
          <ListItemText
            className="final-transaction-status"
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSummary } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import {
  infoPayment,
  infoProduct,
  infoProductValues,
} from "../../views/Products/constants";
import Button from "../Button";
import Icon from "../Icon";
import ListItemText from "../ListItemText";
import IconChevronDown from "./../../assets/icons/chevron-double-down.svg";
import IconChevronUp from "./../../assets/icons/chevron-double-up.svg";
import IconCurrencyDollar from "./../../assets/icons/currency-dollar.svg";
import IconX from "./../../assets/icons/x.svg";
import "./styles.scss";

const Backdrop: React.FC = () => {
  const { selectedProduct } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const { paymentInfo, userInfo } = useSelector(
    (state: RootState) => state.payments
  );
  const { cardNumber, document, documentType, installments } =
    paymentInfo || {};
  const { email, fullname, phoneNumber } = userInfo || {};

  const [hiddenClass, setHiddenClass] = useState<"maximize" | "minimize">(
    "maximize"
  );

  const { image, name } = selectedProduct || {};
  const detailProductInfo = infoProduct(selectedProduct!);
  const paymentProductInfo = infoProductValues(selectedProduct!);
  const paymentSummary = infoPayment({
    cardNumber: cardNumber!,
    document: document!,
    documentType: documentType!,
    email: email!,
    fullname: fullname!,
    installments: installments!,
    phoneNumber: phoneNumber!,
  });

  const handleMiniize = () => setHiddenClass("minimize");

  const handleMaximize = () => setHiddenClass("maximize");

  const handleClose = () => dispatch(showSummary(false));

  return (
    <div className={`backdrop-container ${hiddenClass}`}>
      {hiddenClass === "maximize" && (
        <span className="minimize-backdrop" onClick={handleMiniize}>
          <Icon pathIcon={IconChevronDown} size={24} brightness={1} />
        </span>
      )}

      {hiddenClass === "minimize" && (
        <span className="minimize-backdrop" onClick={handleMaximize}>
          <Icon pathIcon={IconChevronUp} size={24} brightness={1} />
        </span>
      )}

      <span className="close-backdrop" onClick={handleClose}>
        <Icon pathIcon={IconX} size={18} brightness={1} />
      </span>

      <h1 className="backdrop-title">Resumen de la compra</h1>
      <hr />

      <div className="summary-wrapper">
        <div className="summary-product">
          <div className="product-detail-image">
            <img src={image} alt={name} />
          </div>

          <ListItemText
            itemList={detailProductInfo.itemList}
            title={detailProductInfo.title}
          />
        </div>

        <ListItemText
          className="summary-payment-info"
          itemList={paymentProductInfo.itemList}
          title={paymentProductInfo.title}
        />

        <ListItemText
          className="summary-values"
          itemList={paymentSummary.itemList}
          title={paymentSummary.title}
        />
      </div>

      <Button icon={IconCurrencyDollar} text="CONFIRMAR PAGO" />
    </div>
  );
};

export default Backdrop;

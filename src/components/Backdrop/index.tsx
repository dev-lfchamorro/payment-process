import { useSummary } from "../../hooks";
import Button from "../Button";
import Icon from "../Icon";
import ListItemText from "../ListItemText";
import IconChevronDown from "./../../assets/icons/chevron-double-down.svg";
import IconChevronUp from "./../../assets/icons/chevron-double-up.svg";
import IconCurrencyDollar from "./../../assets/icons/currency-dollar.svg";
import Loader from "./../../assets/icons/loader-rolling.svg";
import IconX from "./../../assets/icons/x.svg";
import "./styles.scss";

const Backdrop: React.FC = () => {
  const {
    detailProductInfo,
    handleClose,
    handleConfirmPayment,
    handleMaximize,
    handleMiniize,
    hiddenClass,
    image,
    loader,
    name,
    paymentProductInfo,
    paymentSummary,
  } = useSummary();

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

      {!loader && (
        <Button
          icon={IconCurrencyDollar}
          text="CONFIRMAR PAGO"
          onClick={handleConfirmPayment}
        />
      )}

      {loader && <img src={Loader} alt="" width={40} height={40} />}
    </div>
  );
};

export default Backdrop;

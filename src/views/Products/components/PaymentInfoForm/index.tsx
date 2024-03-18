import React from "react";
import Button from "../../../../components/Button";
import CheckboxComponent from "../../../../components/common/Checkbox";
import DropDownList from "../../../../components/common/DropDownList";
import InputText from "../../../../components/common/InputText";
import { ValidCreditCard } from "../../../../helpers";
import { usePaymentInfoForm } from "../../../../hooks";
import ImgArrowLeftCircle from "./../../../../assets/icons/arrow-left-circle.svg";
import ImgCashCoin from "./../../../../assets/icons/cash-coin.svg";
import ImgMasterCard from "./../../../../assets/images/mastercard-logo.png";
import ImgVisa from "./../../../../assets/images/visa-logo.png";
import "./styles.scss";

type PaymentInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
  setIsOpenModal: (show: boolean) => void;
};

const PaymentInfoForm: React.FC<PaymentInfoFormProps> = ({
  setShowInfoForm,
  setIsOpenModal,
}) => {
  const { errors, formData, handleChange, handleSave, creditCardBranch } =
    usePaymentInfoForm({
      setShowInfoForm,
      setIsOpenModal,
    });

  return (
    <div className="payment-info-form-container">
      <h3>Ingresa los datos de tu tarjeta</h3>

      {creditCardBranch === ValidCreditCard.Mastercard && (
        <img
          className="card-logo"
          src={ImgMasterCard}
          alt={ValidCreditCard.Mastercard}
        />
      )}

      {creditCardBranch === ValidCreditCard.Visa && (
        <img className="card-logo" src={ImgVisa} alt={ValidCreditCard.Visa} />
      )}

      <InputText
        errorText={errors.cardNumber && errors.cardNumber}
        hasError={errors.cardNumber ? true : false}
        id="cardNumber"
        label="Número de la tarjeta"
        name="cardNumber"
        onChange={handleChange}
        type="number"
        value={formData.cardNumber}
      />

      <div className="security-fields-wrapper">
        <div className="expiry-fields-wrapper">
          <label htmlFor="expiry-month">Expira el</label>

          <div className="expiry-fields-area">
            <DropDownList
              name="expiryMonth"
              id="expiryMonth"
              options={[
                { text: "01", value: "1" },
                { text: "02", value: "2" },
                { text: "03", value: "3" },
                { text: "04", value: "4" },
                { text: "05", value: "5" },
                { text: "06", value: "6" },
              ]}
              value={formData.expiryMonth}
              onChange={handleChange}
            />

            <DropDownList
              name="expiryYear"
              id="expiryYear"
              options={[
                { text: "2024", value: "2024" },
                { text: "2025", value: "2025" },
                { text: "2026", value: "2026" },
                { text: "2027", value: "2027" },
                { text: "2028", value: "2028" },
                { text: "2029", value: "2029" },
              ]}
              value={formData.expiryYear}
              onChange={handleChange}
            />
          </div>
        </div>

        <InputText
          errorText={errors.cvc && errors.cvc}
          id="cvc"
          label="CVC (Código de seguridad)"
          maxLength={3}
          name="cvc"
          onChange={handleChange}
          type="number"
          hasError={errors.cvc ? true : false}
          value={formData.cvc}
        />
      </div>

      <InputText
        errorText={errors.cardUsername && errors.cardUsername}
        id="cardUsername"
        label="Nombre en la tarjeta"
        maxLength={100}
        name="cardUsername"
        onChange={handleChange}
        type="text"
        hasError={errors.cardUsername ? true : false}
        value={formData.cardUsername}
      />

      <div className="document-field-wrapper">
        <label htmlFor="phone-number">Identificación del tarjetahabiente</label>

        <div className="fields-wrapper">
          <DropDownList
            name="documentType"
            id="documentType"
            options={[
              { text: "CC", value: "CC" },
              { text: "CE", value: "CE" },
            ]}
            value={formData.documentType}
            onChange={handleChange}
          />

          <InputText
            errorText={errors.document && errors.document}
            id="document"
            name="document"
            placeholder="Ingresa tu documento"
            type="number"
            hasError={errors.document ? true : false}
            onChange={handleChange}
            value={formData.document}
          />
        </div>
      </div>

      <InputText
        errorText={errors.installments && errors.installments}
        hasError={errors.installments ? true : false}
        id="installments"
        label="Número de cuotas"
        maxLength={2}
        name="installments"
        onChange={handleChange}
        type="number"
        value={formData.installments}
      />

      <CheckboxComponent id="termsAndPolicies" name="termsAndPolicies">
        <span>
          Acepto haber leído los{" "}
          <b>Términos y condiciones y la política de privacidad</b> para hacer
          este pago.
        </span>
      </CheckboxComponent>

      <div className="btns-wraper">
        <Button
          className="btn-action"
          text="Atrás"
          icon={ImgArrowLeftCircle}
          onClick={() => setShowInfoForm(true)}
        />

        <Button
          className="btn-action"
          text="PAGAR"
          icon={ImgCashCoin}
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default PaymentInfoForm;

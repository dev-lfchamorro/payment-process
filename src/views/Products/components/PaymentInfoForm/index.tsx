import React from "react";
import Button from "../../../../components/Button";
import DropDownList from "../../../../components/common/DropDownList";
import InputText from "../../../../components/common/InputText";
import ImgArrowLeftCircle from "./../../../../assets/icons/arrow-left-circle.svg";
import ImgCashCoin from "./../../../../assets/icons/cash-coin.svg";
import "./styles.scss";

type PaymentInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
};

const PaymentInfoForm: React.FC<PaymentInfoFormProps> = ({
  setShowInfoForm,
}) => {
  return (
    <div className="payment-info-form-container">
      <h3>Ingresa los datos de tu tarjeta</h3>

      <InputText
        id="card-number"
        type="number"
        name="card-number"
        label="Número de la tarjeta"
      />

      <div className="security-fields-wrapper">
        <div className="expiry-fields-wrapper">
          <label htmlFor="expiry-month">Expira el</label>

          <div className="expiry-fields-area">
            <DropDownList
              name="expiry-month"
              id="expiry-month"
              options={[
                { text: "01", value: "1" },
                { text: "02", value: "2" },
                { text: "03", value: "3" },
                { text: "04", value: "4" },
                { text: "05", value: "5" },
                { text: "06", value: "6" },
              ]}
            />

            <DropDownList
              name="expiry-year"
              id="expiry-year"
              options={[
                { text: "2024", value: "2024" },
                { text: "2025", value: "2025" },
                { text: "2026", value: "2026" },
                { text: "2027", value: "2027" },
                { text: "2028", value: "2028" },
                { text: "2029", value: "2029" },
              ]}
            />
          </div>
        </div>

        <InputText
          id="cvc"
          type="number"
          name="cvc"
          label="CVC (Código de seguridad)"
        />
      </div>

      <InputText
        id="card-username"
        type="text"
        name="card-username"
        label="Nombre en la tarjeta"
      />

      <div className="document-field-wrapper">
        <label htmlFor="phone-number">Identificación del tarjetahabiente</label>

        <div className="fields-wrapper">
          <DropDownList
            name="document-type"
            id="document-type"
            options={[
              { text: "CC", value: "CC" },
              { text: "CE", value: "CE" },
            ]}
          />

          <InputText
            id="documento"
            type="number"
            name="documento"
            placeholder="Ingresa tu documento"
          />
        </div>
      </div>

      <InputText
        id="installments"
        type="number"
        name="installments"
        label="Número de cuotas"
      />

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
          onClick={() => setShowInfoForm(false)}
        />
      </div>
    </div>
  );
};

export default PaymentInfoForm;

import React from "react";
import Button from "../../../../components/Button";
import DropDownList from "../../../../components/common/DropDownList";
import InputText from "../../../../components/common/InputText";
import ImgArrowRightCircle from "./../../../../assets/icons/arrow-right-circle.svg";
import "./styles.scss";

const UserInfoForm: React.FC = () => {
  return (
    <div className="user-info-form-container">
      <h3>Ingresa tus datos</h3>

      <InputText
        id="email"
        type="text"
        name="email"
        placeholder="ing.lfchamorro@gmail.com"
        label="Correo electrónico"
      />

      <InputText
        id="full-name"
        type="text"
        name="full-name"
        placeholder="Luis Chamorro"
        label="Nombres y Apellidos"
      />

      <div className="phone-field-wrapper">
        <label htmlFor="phone-number">Celular o Número telefónico</label>

        <div className="fields-wrapper">
          <DropDownList
            name="phone-code"
            id="phone-code"
            options={[{ text: "(+57) 🇨🇴", value: "57" }]}
          />

          <InputText
            id="number"
            type="number"
            name="phone-number"
            placeholder="311 864 8813"
          />
        </div>
      </div>

      <Button
        className="btn-continue"
        text="Continuar"
        icon={ImgArrowRightCircle}
      />
    </div>
  );
};

export default UserInfoForm;

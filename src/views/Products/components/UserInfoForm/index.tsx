import React from "react";
import Button from "../../../../components/Button";
import DropDownList from "../../../../components/common/DropDownList";
import InputText from "../../../../components/common/InputText";
import { useUserInfoForm } from "../../../../hooks";
import ImgArrowRightCircle from "./../../../../assets/icons/arrow-right-circle.svg";
import "./styles.scss";

type UserInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({ setShowInfoForm }) => {
  const { errors, formData, handleChange, handleNext } = useUserInfoForm({
    setShowInfoForm,
  });

  return (
    <div className="user-info-form-container">
      <h3>Ingresa tus datos personales</h3>

      <InputText
        errorText={errors.email && errors.email}
        hasError={errors.email ? true : false}
        id="email"
        label="Correo electrónico"
        maxLength={150}
        name="email"
        onChange={handleChange}
        placeholder="ing.lfchamorro@gmail.com"
        type="text"
        value={formData.email}
      />

      <InputText
        errorText={errors.fullname && errors.fullname}
        hasError={errors.fullname ? true : false}
        id="fullname"
        label="Nombres y Apellidos"
        maxLength={100}
        name="fullname"
        onChange={handleChange}
        placeholder="Luis Chamorro"
        type="text"
        value={formData.fullname}
      />

      <div className="phone-field-wrapper">
        <label htmlFor="phone-number">Celular o Número telefónico</label>

        <div className="fields-wrapper">
          <DropDownList
            name="phoneCode"
            id="phoneCode"
            options={[
              { text: "(+57) 🇨🇴", value: "57" },
              { text: "(+55) 🇧🇷", value: "55" },
              { text: "(+54) 🇦🇷", value: "54" },
            ]}
            value={formData.phoneCode}
            onChange={handleChange}
          />

          <InputText
            errorText={errors.phoneNumber && errors.phoneNumber}
            hasError={errors.phoneNumber ? true : false}
            id="phoneNumber"
            maxLength={10}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="311 864 8813"
            type="number"
            value={formData.phoneNumber}
          />
        </div>
      </div>

      <Button
        className="btn-continue"
        text="Continuar"
        icon={ImgArrowRightCircle}
        onClick={handleNext}
      />
    </div>
  );
};

export default UserInfoForm;

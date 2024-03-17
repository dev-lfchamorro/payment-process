import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../../components/Button";
import DropDownList from "../../../../components/common/DropDownList";
import InputText from "../../../../components/common/InputText";
import { isEmpty, isValidEmail, isValidPhone } from "../../../../helpers";
import { RootState } from "../../../../redux/reducers";
import { UserInfo } from "../../../../types";
import ImgArrowRightCircle from "./../../../../assets/icons/arrow-right-circle.svg";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../../redux/actions";

type UserInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({ setShowInfoForm }) => {
  const { userInfo } = useSelector((state: RootState) => state.payments);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<UserInfo>({
    email: userInfo?.email || "",
    fullname: userInfo?.fullname || "",
    phoneNumber: userInfo?.phoneNumber || "",
  });

  const [errors, setErrors] = useState<UserInfo>({
    email: "",
    fullname: "",
    phoneNumber: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: "Correo electrónico no válido" });
      return;
    }

    if (!isEmpty(formData.fullname)) {
      setErrors({ ...errors, email: "", fullname: "El nombre es obligatorio" });
      return;
    }

    if (!isValidPhone(formData.phoneNumber)) {
      setErrors({
        ...errors,
        email: "",
        fullname: "",
        phoneNumber: "Teléfono no válido",
      });
      return;
    }

    setErrors({
      email: "",
      fullname: "",
      phoneNumber: "",
    });

    dispatch(setUserInfo(formData));
    setShowInfoForm(false);
  };

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
            options={[{ text: "(+57) 🇨🇴", value: "57" }]}
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

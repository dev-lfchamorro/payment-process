import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, isValidEmail, isValidPhone } from "../helpers";
import { setUserInfo } from "../redux/actions";
import { RootState } from "../redux/reducers";
import { UserInfo } from "../types";

type useUserInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
};

export const useUserInfoForm = ({ setShowInfoForm }: useUserInfoFormProps) => {
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

  return {
    errors,
    formData,
    handleChange,
    handleNext,
  };
};

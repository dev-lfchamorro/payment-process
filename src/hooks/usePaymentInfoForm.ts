import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidCreditCard, isEmpty, validCreditCard } from "../helpers";
import { setPaymentInfo } from "../redux/actions";
import { RootState } from "../redux/reducers";
import { PaymentInfo } from "../types";

type usePaymentInfoFormProps = {
  setShowInfoForm: (show: boolean) => void;
};

export const usePaymentInfoForm = ({
  setShowInfoForm,
}: usePaymentInfoFormProps) => {
  const { paymentInfo } = useSelector((state: RootState) => state.payments);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<PaymentInfo>({
    cardNumber: paymentInfo?.cardNumber || "",
    cardUsername: paymentInfo?.cardUsername || "",
    cvc: paymentInfo?.cvc || "",
    document: paymentInfo?.document || "",
    documentType: paymentInfo?.documentType || "",
    expiryMonth: paymentInfo?.expiryMonth || "",
    expiryYear: paymentInfo?.expiryYear || "",
    installments: paymentInfo?.installments || "",
  });

  const [errors, setErrors] = useState<PaymentInfo>({
    cardNumber: "",
    cardUsername: "",
    cvc: "",
    document: "",
    documentType: "",
    expiryMonth: "",
    expiryYear: "",
    installments: "",
  });

  const [creditCardBranch, setCreditCardBranch] = useState<ValidCreditCard>(
    ValidCreditCard.Unknown
  );

  useEffect(() => {
    setCreditCardBranch(validCreditCard(formData.cardNumber));
  }, [formData.cardNumber]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!isEmpty(formData.cardNumber)) {
      setErrors({
        ...errors,
        cardNumber: "El Número de la tarjeta es obligatorio",
      });
      return;
    } else if (
      validCreditCard(formData.cardNumber) === ValidCreditCard.Unknown
    ) {
      setErrors({
        ...errors,
        cardNumber: "Ingrese un número de tarjeta válido",
      });
      return;
    }

    if (!isEmpty(formData.cvc)) {
      setErrors({ ...errors, cardNumber: "", cvc: "El CVC es obligatorio" });
      return;
    } else if (formData.cvc.length > 3) {
      setErrors({
        ...errors,
        cardNumber: "",
        cvc: "El CVC debe ser de 3 dígitos",
      });
      return;
    }

    if (!isEmpty(formData.cardUsername)) {
      setErrors({
        ...errors,
        cardNumber: "",
        cvc: "",
        cardUsername: "El Nombre en la tarjeta es obligatorio",
      });
      return;
    }

    if (!isEmpty(formData.document)) {
      setErrors({
        ...errors,
        cardNumber: "",
        cvc: "",
        cardUsername: "",
        document: "El Documento es obligatorio",
      });
      return;
    }

    if (!isEmpty(formData.installments)) {
      setErrors({
        ...errors,
        cardNumber: "",
        cvc: "",
        cardUsername: "",
        document: "",
        installments: "El número de cuotas es obligatorio",
      });
      return;
    } else if (formData.installments.length > 2) {
      setErrors({
        ...errors,
        cardNumber: "",
        cvc: "",
        cardUsername: "",
        document: "",
        installments: "Máximo puede diferir a 99 cuotas",
      });
      return;
    }

    setErrors({
      cardNumber: "",
      cardUsername: "",
      cvc: "",
      document: "",
      documentType: "",
      expiryMonth: "",
      expiryYear: "",
      installments: "",
    });

    dispatch(setPaymentInfo(formData));
    setShowInfoForm(false);
  };

  return {
    creditCardBranch,
    errors,
    formData,
    handleChange,
    handleSave,
  };
};

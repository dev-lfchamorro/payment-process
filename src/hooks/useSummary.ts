import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showSummary } from "../redux/actions";
import { RootState } from "../redux/reducers";
import {
  infoPayment,
  infoProduct,
  infoProductValues,
} from "../views/Products/constants";
import { paths } from "../constants";

export const useSummary = () => {
  const { selectedProduct } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { paymentInfo, userInfo } = useSelector(
    (state: RootState) => state.payments
  );
  const { cardNumber, document, documentType, installments } =
    paymentInfo || {};
  const { email, fullname, phoneNumber } = userInfo || {};

  const [hiddenClass, setHiddenClass] = useState<"maximize" | "minimize">(
    "maximize"
  );
  const [loader, setLoader] = useState(false);

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

  const handleConfirmPayment = () => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      dispatch(showSummary(false));
      navigate(paths.transactionStatus);
    }, 1000);
  };

  return {
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
  };
};

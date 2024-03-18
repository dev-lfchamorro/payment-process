import React, { ReactNode, useEffect, useState } from "react";
import Icon from "../Icon";
import IconX from "./../../assets/icons/x.svg";
import "./styles.scss";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsModalActive(true);
      }, 10);
    }
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isModalActive ? "active" : ""}`}
      onClick={handleClose}
      data-testid="modal-overlay"
    >
      <div className="modal-container" data-testid="modal-container">
        <Icon
          pathIcon={IconX}
          size={15}
          onClick={onClose}
          className="close-button"
        />

        <div className="modal-content" data-testid="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

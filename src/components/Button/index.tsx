import React from "react";
import Icon from "../Icon";
import "./styles.scss";

export type ButtonProps = {
  className?: string;
  icon: string;
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, icon, text, onClick }) => {
  return (
    <div className={`${className || ""}`} onClick={onClick}>
      <button className="payment-btn">
        <Icon pathIcon={icon} size={14} brightness={1} />
        {text}
      </button>
    </div>
  );
};

export default Button;

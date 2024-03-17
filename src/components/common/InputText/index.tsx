import React from "react";
import "./styles.scss";

type InputTextProps = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  type: "text" | "number" | "password";
};

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  name,
  placeholder,
  type,
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputText;

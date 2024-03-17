import React from "react";
import "./styles.scss";

type InputTextProps = {
  id: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  placeholder?: string;
  type: "text" | "number" | "password";
};

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  maxLength = 10,
  minLength = 0,
  name,
  placeholder,
  type,
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputText;

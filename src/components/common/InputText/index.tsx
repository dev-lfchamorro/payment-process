import React from "react";
import "./styles.scss";

type InputTextProps = {
  errorText?: string;
  hasError?: boolean;
  id: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  onChange?: (value: any) => void;
  placeholder?: string;
  type: "text" | "number" | "password";
};

const InputText: React.FC<InputTextProps> = ({
  errorText,
  hasError,
  id,
  label,
  maxLength = 10,
  minLength = 0,
  name,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      {hasError && <span>{errorText}</span>}
    </div>
  );
};

export default InputText;

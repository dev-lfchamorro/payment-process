import React from "react";
import "./styles.scss";

type DropDownListProps = {
  id: string;
  label?: string;
  name: string;
  options: { text: string; value: string }[];
  onChange?: (value: any) => void;
  value?: string | number;
};

const DropDownList: React.FC<DropDownListProps> = ({
  id,
  name,
  options,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="select-wrapper">
      {label && <label htmlFor={name}>{label}</label>}

      <select name={name} id={id} defaultValue={value} onChange={onChange}>
        {options.map((option, idx) => (
          <option key={idx + 1} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;

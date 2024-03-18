import { ReactNode, useState } from "react";
import "./styles.scss";

export type CheckboxProps = {
  id: string;
  name: string;
  children: ReactNode;
};

const Checkbox: React.FC<CheckboxProps> = ({ children, id, name }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          checked={checked}
          id={id}
          name={name}
          onChange={handleChange}
          type="checkbox"
        />
        {children}
      </label>
    </div>
  );
};

export default Checkbox;

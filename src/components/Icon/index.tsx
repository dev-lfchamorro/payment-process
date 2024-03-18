import React from "react";
import "./styles.scss";

type IconProps = {
  brightness?: 0 | 1;
  className?: string;
  pathIcon: string;
  size: number;
  text?: string;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({
  brightness,
  className,
  pathIcon,
  size,
  text,
  onClick,
}) => {
  const iconClasses = `icon ${className || ""}`;
  const brightnessValue = brightness
    ? "brightness(1) invert(0)"
    : "brightness(0) invert(1)";

  return (
    <div className={iconClasses} onClick={onClick} data-testid="icon-container">
      <img
        alt="Icon"
        height={size}
        loading="lazy"
        src={pathIcon}
        style={{ filter: brightnessValue }}
        width={size}
      />
      {text && text}
    </div>
  );
};

export default Icon;

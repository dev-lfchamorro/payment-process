import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { paths } from "../../constants";

type LogoProps = {
  primaryText?: string;
  secondaryText?: string;
  slogan: string;
};

const Logo: React.FC<LogoProps> = ({
  primaryText = "Pago",
  secondaryText = "LC",
  slogan,
}) => {
  return (
    <Link to={paths.products}>
      <div className="logo">
        <div className="logo-name">
          {primaryText} <span>{secondaryText}</span>
        </div>
        <span className="logo-slogan">{slogan}</span>
      </div>
    </Link>
  );
};

export default Logo;

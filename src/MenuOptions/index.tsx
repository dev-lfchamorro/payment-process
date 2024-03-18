import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { menuOptions } from "../constants";
import "./styles.scss";

interface CustomNavLinkProps extends NavLinkProps {
  activeClassName?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to,
  children,
  activeClassName,
  ...rest
}) => {
  return (
    <NavLink to={to} className={activeClassName} {...rest}>
      {children}
    </NavLink>
  );
};

const MenuOptions: React.FC = () => {
  return (
    <ul className="nav-list">
      {menuOptions.map((option, idx) => (
        <li key={idx + 1}>
          <CustomNavLink to={option.redirect}>{option.text}</CustomNavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOptions;

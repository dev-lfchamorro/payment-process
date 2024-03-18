import React, { useState } from "react";
import MenuOptions from "../../MenuOptions";
import IconList from "../../assets/icons/list.svg";
import IconX from "../../assets/icons/x.svg";
import Icon from "../../components/Icon";
import "./styles.scss";

const NavBar: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState("");

  const handleOpenMenu = () => setVisibleMenu("visible");
  const handleCloseMenu = () => setVisibleMenu("");

  return (
    <div className="nav-bar-container">
      <div className="navigation-container">
        <Icon
          brightness={0}
          className="hamburger-menu-open"
          onClick={handleOpenMenu}
          pathIcon={IconList}
          size={40}
        />

        <nav className={`nav-container ${visibleMenu}`}>
          <Icon
            brightness={1}
            className="hamburger-menu-close"
            onClick={handleCloseMenu}
            pathIcon={IconX}
            size={40}
          />

          <MenuOptions />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import "./styles.scss";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header id="header-container" className={sticky ? "sticky" : ""}>
      <Logo slogan="Paga fácil y seguro" />
      <NavBar />
    </header>
  );
};

export default Header;

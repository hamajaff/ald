import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import "./styled/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/" className="logo-container">
        <img src="Transparent3.png" alt="Logo" />
      </Link>

      <div className="hamburgerMenu">
        <HamburgerMenu isOpen={isMenuOpen} menuClicked={toggleMenu} />
      </div>

      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li onClick={toggleMenu}>
            <Link to="/">Hem</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/services">Våra tjänster</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/offer">Offert förfrågning</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">Om Oss</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

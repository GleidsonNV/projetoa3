import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="cabecalho container">
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#clientes" onClick={(e) => handleNavClick(e, "clientes")}>
              Clientes
            </a>
          </li>
          <li>
            <a href="#mensalidades" onClick={(e) => handleNavClick(e, "mensalidades")}>
              Mensalidades
            </a>
          </li>
          <li>
            <Link to="/login" className="botao-login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

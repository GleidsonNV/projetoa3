import React from "react";

function Header() {
  function toggleMenu() {   
      const navbar = document.querySelector('.navbar ul');
      navbar.classList.toggle('active');
};

  return (
    <header className="cabecalho container">
    <div className="logo">
        <img src="logo.png" alt="Logo" />
    </div>
    <nav className="navbar">
        <ul>
            <li> <a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#mensalidades">Mensalidades</a></li>
        </ul>
    </nav>
    <a href="#login" className="botao-login">Login</a>
    <div className="menu-toggle" onClick={toggleMenu}>
        ☰
    </div>
</header>
  );
}

export default Header;

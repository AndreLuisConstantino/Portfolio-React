import React from "react";
import "./Header.css";

const Header = () => {
  const curriculoURL = '../../download/curriculo.pdf';

  return (
    <header>
      <div className="logo__container">
        <i className="fa-solid fa-laptop-code"></i>
        <span>PORTFÓLIO</span>
      </div>

      <a href="../../download/curriculo.pdf" className="link-cv" download="curriculo.pdf">
        <span>Download CV</span>
      </a>
    </header>
  );
};

export default Header;

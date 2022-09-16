import React from "react";
import logo from "../../images/header/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <div className="header__sign-buttons">
          <button className="header__registration">Регистрация</button>
          <button className="header__login">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

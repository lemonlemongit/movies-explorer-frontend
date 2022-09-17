import React from "react";
import logo from "../../images/header/logo.svg";

function Header({ loggedIn }) {
  return (
    <header className={`header ${loggedIn ? "header_theme_dark" : ""}`}>
      <div className="header__container">
      <a href="/"><img className="header__logo" src={logo} alt="Логотип сайта" /></a>
        <nav className={`header__nav ${loggedIn ? "header__nav_visible" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__list">Фильмы</li>
            <li className="header__list">Сохранённые фильмы</li>
          </ul>
        </nav>
        <div className="header__user">
          <button className={`header__user-account ${loggedIn ? 'header__user-account_visible' : ""}`}>Аккаунт</button>
        </div>
        <div  className={`header__sign-buttons ${ loggedIn ? "header__sign-buttons_inviseble" : ""}`}>
          <button className="header__registration">Регистрация</button>
          <button className="header__login">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

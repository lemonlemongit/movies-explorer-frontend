import { React, useState } from "react";
import logo from "../../images/header/logo.svg";
import { NavLink, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [navIsOpen, setPopupNavOpen] = useState(false);

  function openNav() {
    setPopupNavOpen(true);
  }
  function closeNav() {
    setPopupNavOpen(false);
  }
  return (
    <header className={`header ${loggedIn ? "header_theme_dark" : ""}`}>
      <div className="header__container">
        <a href="/">
          <img className="header__logo" src={logo} alt="Логотип сайта" />
        </a>
        <nav className={`header__nav ${loggedIn ? "header__nav_visible" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__list">
              <NavLink
                to="/movies"
                activeClassName="header__list_active"
                className="header__list-li"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__list">
              <NavLink
                to="/saved-movies"
                activeClassName="header__list_active"
                className="header__list-li"
              >
                Сохранённые фильмы{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <Link
            to="/profile"
            className={`header__user-account ${
              loggedIn ? "header__user-account_visible" : ""
            }`}
          >
            Аккаунт
            <div className="header__user-account-icon">
              <span className="header__user-icon"></span>
            </div>
          </Link>
        </div>
        <button
          className={`header__burger ${
            loggedIn ? "header__burger_visible" : ""
          }`}
          onClick={openNav}
        ></button>
        <div
          className={`header__sign-buttons ${
            loggedIn ? "header__sign-buttons_inviseble" : ""
          }`}
        >
          <Link to="/signup">
            <button className="header__registration">Регистрация</button>
          </Link>
          <Link to="signin">
            <button className="header__login">Войти</button>
          </Link>
        </div>
      </div>
      <Navigation navIsOpen={navIsOpen} closeNav={closeNav} />
    </header>
  );
}

export default Header;

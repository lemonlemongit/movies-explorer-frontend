import { React, useState } from "react";
import logo from "../../images/header/logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink, Link, useLocation } from "react-router-dom";

function HeaderNoMain({ setFilterIsOn }) {
  const [navIsOpen, setPopupNavOpen] = useState(false);
  const { pathname } = useLocation()

  function openNav() {
    setPopupNavOpen(true);
  }
  function closeNav() {
    setPopupNavOpen(false);
  }

  const setFalse = () => {
    if (setFilterIsOn) {
      setFilterIsOn(false)
    }
  }

  return (
    <header className="header header_theme_dark">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <nav className="header__nav header__nav_visible">
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
                onClick={pathname !== '/saved-movies' ? setFalse: undefined}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__user">
          <Link
            to="/profile"
            className={"header__user-account header__user-account_visible"}
          >
            Аккаунт
            <div className="header__user-account-icon">
              <span className="header__user-icon"></span>
            </div>
          </Link>
        </div>

        <button
          type="button"
          className="header__burger header__burger_visible"
          onClick={openNav}
        ></button>
      </div>
      <Navigation navIsOpen={navIsOpen} closeNav={closeNav} />
    </header>
  );
}

export default HeaderNoMain;

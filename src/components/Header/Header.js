import { React, useState } from "react";
import logo from "../../images/header/logo.svg";
import Navigation from "../Navigation/Navigation";
import HeaderMain from "../HeaderMain/HeaderMain";

import { NavLink, Link, useLocation } from "react-router-dom";

function Header({ aloggedIn, isLoggedIn, setFilterIsOn }) {
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
    <>
      {!isLoggedIn && (
        <header className="header">
          <div className="header__container">
            <a href="/">
              <img className="header__logo" src={logo} alt="Логотип сайта" />
            </a>
            <div className="header__user header__user_type_main">
              <div className="header__registration header__registration_type_vision">
                <HeaderMain isLoggedIn={isLoggedIn} />
              </div>
            </div>
          </div>
        </header>
      )}

      {isLoggedIn && (<header className="header">
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
                onClick={pathname !== '/movies' ? setFalse: undefined}
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
    )}
     
    </>
  );
}

export default Header;

import { React, useState } from "react";
import logo from "../../images/header/logo.svg";
import Navigation from "../Navigation/Navigation";
import HeaderMain from "../HeaderMain/HeaderMain";

function Header({ aloggedIn, isLoggedIn }) {
  const [navIsOpen, setPopupNavOpen] = useState(false);

  function openNav() {
    setPopupNavOpen(true);
  }
  function closeNav() {
    setPopupNavOpen(false);
  }
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <img className="header__logo" src={logo} alt="Логотип сайта" />
        </a>

        {!isLoggedIn && (
          <div className="header__user header__user_type_main">
            <div className="header__registration header__registration_type_vision">
              <HeaderMain isLoggedIn={isLoggedIn} />
            </div>
          </div>
        )}

        {isLoggedIn && (
          <div className="header__user header__user_type_vision">
            <div className="header__registration header__registration_type_vision">
              <HeaderMain isLoggedIn={isLoggedIn} />
            </div>
          </div>
        )}

        <button
          type="button"
          className={`header__burger ${
            aloggedIn ? "header__burger_visible" : ""
          }`}
          onClick={openNav}
        ></button>
      </div>
      <Navigation navIsOpen={navIsOpen} closeNav={closeNav} />
    </header>
  );
}

export default Header;

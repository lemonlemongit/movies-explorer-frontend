import React from "react";
import { Link } from "react-router-dom";
import HeaderNoMain from "../HeaderNoMain/HeaderNoMain";

function HeaderMain({ isLoggedIn }) {
  return (
    <>
      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button
              className="header__registr header__registration_type_vision header__registration_type_margin"
              type="button"
            >
              Регистрация
            </button>
          </Link>

          <Link to="signin">
            <button
              className="header__login header__login_type_vision"
              type="button"
            >
              Войти
            </button>
          </Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <HeaderNoMain isLoggedIn={isLoggedIn} />
        </>
      )}
    </>
  );
}

export default HeaderMain;

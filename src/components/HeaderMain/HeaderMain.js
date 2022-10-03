import React from "react";
import {Link} from "react-router-dom";

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
            <button className="header__login header__login_type_vision" type="button">
              Войти
            </button>
          </Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link
          to="/profile"
          className={"header__user-account header__user-account_visible"}
        >
          Аккаунт
          <div className="header__user-account-icon">
            <span className="header__user-icon"></span>
          </div>
        </Link>
        </>
      )}
  </>
  );
}

export default HeaderMain;

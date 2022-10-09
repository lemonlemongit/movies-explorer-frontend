import React from "react";
import { NavLink, Link } from "react-router-dom";
import closeButton from "../../images/header/close-icon.svg";

function Navigation({ navIsOpen, closeNav }) {
  return (
    <div className={`navigation ${navIsOpen ? "navigation_opened" : ""}`}>
      <nav className="navigation__container">
        <button
          className="navigation__close"
          type="button"
          onClick={() => closeNav()}
        >
          <img
            className="navigation__close-icon"
            src={closeButton}
            alt="Закрыть окно"
          />
        </button>
        <ul className="navigation__lists">
          <li className="navigation__list">
            <Link to="/" className="navigation__list-link">
              Главная
            </Link>
          </li>
          <li className="navigation__list">
            <NavLink
              to="/movies"
              activeClassName="navigationr__list_active"
              className="navigation__list-link"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__list">
            <NavLink
              to="/saved-movies"
              activeClassName="navigationr__list_active"
              className="navigation__list-link"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__list navigation__list_type_profile">
            <NavLink
              to="/profile"
              activeClassName="navigationr__list_active"
              className="navigation__list-link"
            >
              Аккаунт
              <div className="navigation__user-account-icon">
                <span className="navigation__user-icon"></span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

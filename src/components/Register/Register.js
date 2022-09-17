import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.svg";

function Register() {
  return (
    <div className="register__container">
      <a href="/">
        <img className="register__logo" src={logo} alt="Логотип сайта" />
      </a>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__form-lable">Имя</label>
        <input
          className="register__form-input"
          required
          minLength="2"
          maxLength="30"
        ></input>
        <label className="register__form-lable">E-mail</label>
        <input className="register__form-input" type="email" required></input>
        <label className="register__form-lable">Пароль</label>
        <input
          className="register__form-input"
          type="password"
          required
          minLength="2"
          maxLength="30"
        ></input>
        <span className="register__form-error">Что-то пошло не так...</span>
        <button className="register__confirm-button" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__link">
          Уже зарегистрированы?
          <span className="register__link_type_blue">Войти</span>
        </Link>
      </form>
    </div>
  );
}

export default Register;

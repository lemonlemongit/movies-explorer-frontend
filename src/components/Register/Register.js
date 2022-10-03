import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.svg";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../validate/useFormWithValidation";

function Register({ signUpHandler, isSignUpError }) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;

  const submitHandler = (e) => {
    e.preventDefault();
    signUpHandler(name, email, password);
    formWithValidation.resetForm();
  };
  return (
    <div className="register__container">
      <a href="/">
        <img className="register__logo" src={logo} alt="Логотип сайта" />
      </a>
      <h2 className="register__title">Добро пожаловать!</h2>
      <AuthForm
        onSubmit={submitHandler}
        formData={formWithValidation}
        isSignUpError={isSignUpError}
      />

      <Link to="/signin" className="register__link">
        Уже зарегистрированы?
        <span className="register__link_type_blue">Войти</span>
      </Link>
    </div>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.svg";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../validate/useFormWithValidation";

function Login({ signInHandler, isSignInError }) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const submitHandler = (e) => {
    e.preventDefault();
    signInHandler(email, password);
    formWithValidation.resetForm();
  };

  return (
    <div className="register__container">
      <a href="/">
        <img className="register__logo" src={logo} alt="Логотип сайта" />
      </a>
      <h2 className="register__title">Рады видеть!</h2>
      <AuthForm
        FormTypeLogin
        formData={formWithValidation}
        onSubmit={submitHandler}
        isSignInError={isSignInError}
      />
      <Link to="/signup" className="register__link">
        Еще не зарегистрированы?
        <span className="register__link_type_blue">Регистрация</span>
      </Link>
    </div>
  );
}

export default Login;

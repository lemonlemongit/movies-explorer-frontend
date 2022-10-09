import React, { useEffect } from "react";
import SubmitBtn from "../Buttons/SubmitBtn/SubmitBtn";

function AuthForm({
  FormTypeLogin,
  onSubmit,
  formData,
  isSignUpError,
  isSignInError,
}) {
  const { values, handleChange, errors, isValid, resetForm } = formData;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="register__form" onSubmit={onSubmit} noValidate>
      {!FormTypeLogin && (
        <label className="register__form-lable" htmlFor="name">
          Имя
          <input
            className={`register__form-input register__form-input_type_name ${
              errors.name && "register__form-error"
            }`}
            required
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-яё -]+$"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name || ""}
          />
          <span className="register__form-error">{errors.name}</span>
        </label>
      )}
      <label className="register__form-lable" htmlFor="email">
        E-mail
      </label>
      <input
        className={`register__form-input ${
          errors.email && "register__form-error"
        }`}
        type="email"
        required
        name="email"
        pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}$"
        onChange={handleChange}
        value={values.email || ""}
      ></input>
      <span className="register__form-error">{errors.email}</span>

      <label className="register__form-lable" htmlFor="password">
        Пароль
      </label>
      <input
        noValidate
        className="register__form-input"
        name="password"
        type="password"
        value={values.password || ""}
        required
        onChange={handleChange}
        minLength="2"
        maxLength="30"
      ></input>
      <span className="register__form-error">{errors.password}</span>
      <div className={FormTypeLogin ? "register__button_type_signin" : ""}>
        {isSignUpError && (
          <span className="register__form-error">Ошибка при регистрации!</span>
        )}
        {isSignInError && (
          <span className="register__form-error">
            Ошибка при попытке авторизоваться!
          </span>
        )}
        <SubmitBtn
          isDisabled={!isValid}
          label={FormTypeLogin ? "Войти" : "Зарегистрироваться"}
        />
      </div>
    </form>
  );
}

export default AuthForm;

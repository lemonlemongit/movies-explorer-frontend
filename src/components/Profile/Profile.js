import React, { useEffect } from "react";
import useFormWithValidation from "../../validate/useFormWithValidation";
import HeaderNoMain from "../HeaderNoMain/HeaderNoMain";

function Profile({
  currentUser,
  logOutHandler,
  changeUserInfo,
  editIsSuccess,
  editIsFailed,
}) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation();
  useEffect(() => {
    setValues(currentUser);
    setIsValid(true);
  }, [currentUser, setValues, setIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    changeUserInfo(values);
  };

  return (
    <div className="profile">
      <HeaderNoMain />
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={submitHandler} noValidate>
          <div className="profile__form-input profile__form-input_type_border">
            <label className="profile__lablel" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__input"
              required
              id="name"
              name="name"
              type="text"
              minLength="4"
              pattern="^[A-Za-zА-яё -]+$"
              placeholder="Имя"
              value={values.name || ""}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <span className="register__form-error">{errors.name}</span>
          <div className="profile__form-input">
            <label className="profile__lablel">E-mail</label>
            <input
              className="profile__input"
              required
              id="email"
              name="email"
              type="email"
              placeholder="pochta@yandex.ru"
              pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}$"
              value={values.email || ""}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <span className="register__form-error">{errors.email}</span>
          {editIsSuccess && (
            <p className="profile__edit-success">
              Ваш профиль успешно изменён!
            </p>
          )}
          {editIsFailed && (
            <p className="profile__edit-fail">
              Ошибка при изменении профиля! Попробуйте еще раз.
            </p>
          )}
          <button
            type="submit"
            className={
              isValid &&
              (values.name !== currentUser.name ||
                values.email !== currentUser.email)
                ? "profile__edit-button profile__edit-button_type_active"
                : "profile__edit-button"
            }
            disabled={
              (values.name === currentUser.name &&
                values.email === currentUser.email) ||
              !isValid
            }
          >
            Редактировать
          </button>
        </form>
        <a href="/">
          <button
            className="profile__signout-button"
            type="button"
            onClick={logOutHandler}
          >
            Выйти из аккаунта
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;

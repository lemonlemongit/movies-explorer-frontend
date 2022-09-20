import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.svg";
import Header from "../Header/Header";

function Profile() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div className="profile">
      <Header loggedIn={loggedIn} />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__form-input profile__form-input_type_border">
            <label className="profile__lablel">Имя</label>
            <input
              className="profile__input"
              id="name"
              value={"Виталий"}
              disabled
            />
          </div>
          <div className="profile__form-input">
            <label className="profile__lablel">E-mail</label>
            <input
              className="profile__input"
              id="name"
              value={"pochta@yandex.ru"}
              disabled
            />
          </div>
          <button className="profile__edit-button" type="submit">
            Редактировать
          </button>
        </form>
        <a href="/">
          <button className="profile__signout-button" type="submit">
            Выйти из аккаунта
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;

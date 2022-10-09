import React from "react";
import Avatar from "../../images/aboutMe/avatar1.png";

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__profile">
          <div className="aboutMe__profile-iformation">
            <h3 className="aboutMe__profile-title">Павел</h3>
            <p className="aboutMe__profile-subtitle">
              Студент web-разработки, 28 лет
            </p>
            <p className="aboutMe__my-decription">
              Я живу в Санкт-Петербурге. Люблю слушать музыку. Недавно начал
              кодить. Год назад решил пройти курс по веб-разработке, а после
              защиты дипломной работы заняться фриланс-заказами и уйти с
              постоянной работы. Мои работы есть на Github по ссылке ниже.
            </p>
            <a
              className="aboutMe__my-github"
              href="https://github.com/lemonlemongit"
              target="blank"
            >
              Github
            </a>
          </div>
          <div className="aboutMe__profile-photo">
            <img
              className="aboutMe__avatar"
              src={Avatar}
              alt="Фотография студента"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default AboutMe;

import React from "react";

function MoviesCard({ title, duration, picture, classFlag, flag }) {
  return (
    <div className="moviesCard__container">
      <div className="moviesCard__preview-block">
        <div className="moviesCard__description-film">
          <h2 className="moviesCard__film-title">{title}</h2>
          <div className="moviesCard__duration">{duration}</div>
        </div>
        <button className={classFlag} type="button">
          <img
            className="moviesCard__flag-img"
            src={flag}
            alt="Кнопка сохранить"
          />
        </button>
      </div>
      <img className="moviesCard__picture" alt="Фильм" src={picture} />
    </div>
  );
}
export default MoviesCard;

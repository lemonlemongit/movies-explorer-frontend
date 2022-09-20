import React from "react";
import inactive from "../../images/moviesCard/flag-inactive.svg";

function MoviesCard({ title, duration, picture }) {
  return (
    <div className="moviesCard__container">
      <div className="moviesCard__preview-block">
        <div className="moviesCard__description-film">
          <h2 className="moviesCard__film-title">{title}</h2>
          <div className="moviesCard__duration">{duration}</div>
        </div>
        <div className="moviesCard__flag">
          <img
            className="moviesCard__flag-img"
            src={inactive}
            alt="Кнопка сохранить"
          />
        </div>
      </div>
      <img className="moviesCard__picture" alt="Фильм" src={picture} />
    </div>
  );
}
export default MoviesCard;

import React from "react";
import durationFormatter from "../../helpers/durationFormatter";
import BookmarkBtn from "../Buttons/BookmarkBtn/BookmarkBtn";
import BookmarkRemoveBtn from "../Buttons/BookmarkRemoveBtn/BookmarkRemoveBtn";

function MoviesCard({ savedMovies, movie, onBookmarkClick, isMovieAdded }) {
  const { nameRU, duration, trailerLink, image } = movie;

  const isAdded = isMovieAdded(movie);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    onBookmarkClick(movie, !isAdded);
  };

  const removeHandler = () => {
    onBookmarkClick(movie, false);
  };
  return (
    <div className="moviesCard__container">
      <div className="moviesCard__preview-block">
        <div className="moviesCard__description-film">
          <h2 className="moviesCard__film-title">{nameRU}</h2>
          <div className="moviesCard__duration">
            {durationFormatter(duration)}
          </div>
        </div>
        {savedMovies
          ? <BookmarkRemoveBtn onClick={removeHandler} />
          : <BookmarkBtn isAdded={isAdded} onClick={handleBookmarkClick} />}
      </div>
      <a
        className="moviesCard__link"
        href={trailerLink}
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          className="moviesCard__picture"
          alt={`Фильм ${nameRU}`}
          src={image}
        />
      </a>
    </div>
  );
}
export default MoviesCard;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import LoadMoreBtn from "../Buttons/LoadMoreBtn/LoadMoreBtn";

function MoviesCardList({
  savedMovies,
  movies,
  onBookmarkClick,
  isMovieAdded,
}) {
  const [currentCount, setCurrentCount] = useState(0);
  const [extraRow, setExtraRow] = useState(3);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const getCount = (windowSize) => {
    if (windowSize >= 1080) {
      return { first: 12, extra: 3 };
    }
    if (windowSize > 480 && windowSize <= 768) {
      return { first: 8, extra: 2 };
    }
    if (windowSize < 480) {
      return { first: 5, extra: 2 };
    }
    return { first: 5, extra: 2 };
  };

  const renderExtraRow = () => {
    const count = Math.min(movies.length, currentCount + extraRow);
    const extraMovies = movies.slice(currentCount, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCount(count);
  };

  const resizeHandler = () => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  useEffect(() => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize).extra);
    const count = Math.min(movies.length, getCount(windowSize).first);
    setMoviesToRender(movies.slice(0, count));
    setCurrentCount(count);
  }, [movies]);

  const renderMore = () => renderExtraRow();

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {moviesToRender.map((movieData) => (
          <li className="moviesCardList__list" key={movieData.id}>
            <MoviesCard
              movie={movieData}
              savedMovies={savedMovies}
              isMovieAdded={isMovieAdded}
              onBookmarkClick={onBookmarkClick}
            />
          </li>
        ))}
      </div>
      <div className="moviesCardList__more">
        {currentCount < movies.length && <LoadMoreBtn onClick={renderMore} />}
      </div>
    </section>
  );
}
export default MoviesCardList;

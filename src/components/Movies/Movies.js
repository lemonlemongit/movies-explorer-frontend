import React, { useState } from "react";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import HeaderNoMain from "../HeaderNoMain/HeaderNoMain";

function Movies({
  savedMovies,
  onSubmitSearch,
  movies,
  isLoading,
  loadingError,
  onBookmarkClick,
  isMovieAdded,
  filterIsOn: isFilterOn,
  setFilterIsOn,
  setFilterNative,
  query
}) {

  const [counter, setCounter] = useState()

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);

  const onFilterClick = () => {
    setFilterIsOn();
  };
  
  return (
    <main>
      <HeaderNoMain setFilterIsOn={setFilterNative} />
      <SearchForm onFilterClick={onFilterClick} onSearch={onSubmitSearch} isFilterOn={isFilterOn} query={query} />
      {isLoading && <Preloader />}

      {!isLoading && loadingError === "" && (
        <MoviesCardList
          savedMovies={savedMovies}
          movies={isFilterOn ? filterShortFilm(movies) : movies}
          onBookmarkClick={onBookmarkClick}
          isMovieAdded={isMovieAdded}
          counter={counter}
          setCounter={setCounter}
        />
      )}
      {!isLoading && loadingError !== "" && (
        <div className="moviesCardList__search-error">{loadingError}</div>
      )}
      <Footer />
    </main>
  );
}

export default Movies;

import React from "react";
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
}) {
  const [filterIsOn, setFilterIsOn] = React.useState(false);

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };
  return (
    <main>
      <HeaderNoMain />
      <SearchForm onFilterClick={onFilterClick} onSearch={onSubmitSearch} />
      {isLoading && <Preloader />}

      {!isLoading && loadingError === "" && (
        <MoviesCardList
          savedMovies={savedMovies}
          movies={filterIsOn ? filterShortFilm(movies) : movies}
          onBookmarkClick={onBookmarkClick}
          isMovieAdded={isMovieAdded}
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

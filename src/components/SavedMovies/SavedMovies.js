import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import HeaderNoMain from "../HeaderNoMain/HeaderNoMain";
function SavedMovies({
  savedMovies,
  movies,
  isLoading,
  loadingError,
  onBookmarkClick,
  isMovieAdded,
  filterIsOn,
  setFilterIsOn,
  setFilterNative,
}) {
  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < 40);
  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const [moviesToRender, setMoviesToRender] = useState([]);

  React.useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, "gi");
      return data.filter(
        (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
      );
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
  };

  return (
    <section className="savedMovies">
      <HeaderNoMain setFilterIsOn={setFilterNative} />
      <SearchForm
        onFilterClick={onFilterClick}
        onSearch={searchInSavedHandler}
        isFilterOn={filterIsOn}
      />
      <section className="moviesCardList">
        {isLoading && <Preloader />}

        {!isLoading && loadingError === "" && (
          <MoviesCardList
            savedMovies={savedMovies}
            movies={
              filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender
            }
            onBookmarkClick={onBookmarkClick}
            isMovieAdded={isMovieAdded}
          />
        )}
        {!isLoading && loadingError !== "" && (
          <div className="register__form-error register__form-error_type_saved">{loadingError}</div>
        )}
      </section>
      <Footer />
    </section>
  );
}
export default SavedMovies;

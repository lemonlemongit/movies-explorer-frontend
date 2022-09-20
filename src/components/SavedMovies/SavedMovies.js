import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import mov1 from "../../images/moviesCardList/mov1.png";
import mov2 from "../../images/moviesCardList/mov2.png";
import mov3 from "../../images/moviesCardList/mov3.png";
import deleteFlag from "../../images/moviesCard/flag-delete.svg";

function SavedMovies() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <section className="savedMovies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <section className="moviesCardList">
        <div className="moviesCardList__container moviesCardList__container_type_saved-movies">
          <MoviesCard
            title={"33 слова о дизайне"}
            duration={"1ч 47м"}
            picture={mov1}
            flag={deleteFlag}
            classFlag={"moviesCard__flag"}
          />
          <MoviesCard
            title={"33 слова о дизайне"}
            duration={"1ч 47м"}
            picture={mov2}
            flag={deleteFlag}
            classFlag={"moviesCard__flag"}
          />
          <MoviesCard
            title={"33 слова о дизайне"}
            duration={"1ч 47м"}
            picture={mov3}
            flag={deleteFlag}
            classFlag={"moviesCard__flag"}
          />
        </div>
      </section>
      <Footer />
    </section>
  );
}
export default SavedMovies;

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import mov1 from "../../images/moviesCardList/mov1.png";
import mov2 from "../../images/moviesCardList/mov2.png";
import mov3 from "../../images/moviesCardList/mov3.png";

function SavedMovies() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [saved, setSaved] = React.useState(true);
  return (
    <section>
    <section className="moviesCardList">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div className="moviesCardList__container">
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov1}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov2}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov3}
        />
      </div>
     
    </section>
    <Footer />
    </section>
    
  );
}
export default SavedMovies;

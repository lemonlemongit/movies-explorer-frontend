import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
function Movies({}) {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [saved, setSaved] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  return (
    <main>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList saved={saved} />
      <Footer />
    </main>
  );
}
export default Movies;

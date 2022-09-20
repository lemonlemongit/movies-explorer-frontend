import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <input className="searchForm__input" placeholder="Фильм" required="true"/>
        <button className="searchForm__button"></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

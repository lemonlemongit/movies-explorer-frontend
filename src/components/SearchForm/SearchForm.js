import React from "react";
import useFormWithValidation from "../../validate/useFormWithValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onFilterClick, onSearch, isLoading }) {
  const formWithValidation = useFormWithValidation();
  const { searchText } = formWithValidation.values;
  const { handleChange, resetForm } = formWithValidation;
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Нужно ввести ключевое слово");
    } else {
      onSearch(searchText);
      setError("");
      resetForm();
    }
  };

  return (
    <section className="searchForm">
      <form className="searchForm__form" noValidate onSubmit={handleSubmit}>
        <input
          name="searchText"
          className="searchForm__input"
          type="text"
          placeholder="Фильм"
          required
          value={searchText || ""}
          onChange={handleChange}
          autoComplete="off"
          disabled={isLoading}
        />
        {error && <span className="searchForm__span-error">{error}</span>}
        <button className="searchForm__button" type="submit"></button>
      </form>
      <FilterCheckbox onFilterClick={onFilterClick} />
    </section>
  );
}

export default SearchForm;

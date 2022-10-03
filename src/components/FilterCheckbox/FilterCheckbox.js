import React from "react";

function FilterCheckbox({ onFilterClick }) {
  return (
    <section className="filterCheckbox">
      <form className="filterCheckbox__switcher">
        <input
          className="filterCheckbox__switcher-input"
          type="checkbox"
          id="filmSwither"
          onClick={onFilterClick}
        />
        <label
          className="filterCheckbox__label filterCheckbox__label_active"
          htmlFor="filmSwither"
        >
          Короткометражки
        </label>
      </form>
    </section>
  );
}

export default FilterCheckbox;

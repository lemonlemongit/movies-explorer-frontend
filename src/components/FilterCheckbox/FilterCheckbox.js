import React from "react";

function FilterCheckbox({ onFilterClick, checked }) {
  return (
    <section className="filterCheckbox">
      <form className="filterCheckbox__switcher">
        <input
          className={`filterCheckbox__switcher-input ${checked ? 'checked': undefined}`}
          type="checkbox"
          id="filmSwither"
          onClick={onFilterClick}
          value={checked}
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

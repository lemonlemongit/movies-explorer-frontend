import React from "react";

function FilterCheckbox() {
  return (
    <section className="filterCheckbox">
      <form className="filterCheckbox__switcher">
        <input
          className="filterCheckbox__switcher-input"
          type="checkbox"
          id="filmSwither"
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

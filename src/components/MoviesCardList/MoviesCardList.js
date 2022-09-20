import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import mov1 from "../../images/moviesCardList/mov1.png";
import mov2 from "../../images/moviesCardList/mov2.png";
import mov3 from "../../images/moviesCardList/mov3.png";
import mov4 from "../../images/moviesCardList/mov4.png";
import mov5 from "../../images/moviesCardList/mov5.png";
import mov6 from "../../images/moviesCardList/mov6.png";
import mov7 from "../../images/moviesCardList/mov7.png";
import mov8 from "../../images/moviesCardList/mov8.png";
import mov9 from "../../images/moviesCardList/mov9.png";
import mov10 from "../../images/moviesCardList/mov10.png";
import mov11 from "../../images/moviesCardList/mov11.png";
import mov12 from "../../images/moviesCardList/mov12.png";
import inactive from "../../images/moviesCard/flag-inactive.svg";
import active from "../../images/moviesCard/flag-active.svg";

function MoviesCardList({ saved }) {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov1}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov2}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov3}
          flag={active}
          classFlag={"moviesCard__flag_type_saved"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov4}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov5}
          flag={active}
          classFlag={"moviesCard__flag_type_saved"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov6}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov7}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov8}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov9}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov10}
          flag={active}
          classFlag={"moviesCard__flag_type_saved"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov11}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
        <MoviesCard
          title={"33 слова о дизайне"}
          duration={"1ч 47м"}
          picture={mov12}
          flag={inactive}
          classFlag={"moviesCard__flag"}
        />
      </div>
      <div className="moviesCardList__more">
        <button
          className={`moviesCardList__more-button ${
            saved ? "moviesCardList__more-button_hidden" : ""
          }`}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}
export default MoviesCardList;

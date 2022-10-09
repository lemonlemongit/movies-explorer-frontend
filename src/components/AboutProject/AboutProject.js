import React from "react";

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">О проекте</h2>

        <div className="aboutProject__description">
          <div className="aboutProject__info-block">
            <h3 className="aboutProject__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutProject__information">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>

          <div className="aboutProject__info-block">
            <h3 className="aboutProject__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__information">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="aboutProject__waste-time-line">
          <div className="aboutProject__time-line">1 неделя</div>
          <div className="aboutProject__time-line aboutProject__time-line_type_grey">
            4 недели
          </div>
          <p className="aboutProject__line">Back-end</p>
          <p className="aboutProject__line">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

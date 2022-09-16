import React from "react";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__technology">
          <h3 className="techs__technology-title">7 технологий</h3>
          <p className="techs__technology-subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__lists">
            <li className="techs__list">HTML</li>
            <li className="techs__list">CSS</li>
            <li className="techs__list">JS</li>
            <li className="techs__list">React</li>
            <li className="techs__list">Git</li>
            <li className="techs__list">Express.js</li>
            <li className="techs__list">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;

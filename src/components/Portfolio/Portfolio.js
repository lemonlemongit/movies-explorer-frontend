import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__portfolio-title">Портфолио</p>
        <ul className="portfolio__portfolio-lists">
          <li className="portfolio__portfolio-list">
            <a
              className="portfolio__portfolio-link"
              href="https://github.com/lemonlemongit/how-to-learn"
              target="blank"
            >
              Статичный сайт
              <div className="portfolio__portfolio-arrow"></div>
            </a>
          </li>
          <li className="portfolio__portfolio-list">
            <a
              className="portfolio__portfolio-link"
              href="https://github.com/lemonlemongit/russian-travel"
              target="blank"
            >
              Адаптивный сайт
              <div className="portfolio__portfolio-arrow"></div>
            </a>
          </li>
          <li className="portfolio__portfolio-list">
            <a
              className="portfolio__portfolio-link"
              href="https://github.com/lemonlemongit/react-mesto-api-full"
              target="blank"
            >
              Одностраниченое приложение
              <div className="portfolio__portfolio-arrow"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__project-by">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__copyright-block">
          <p className="footer__copyright-year">&#169; 2022</p>
          <ul className="footer__copyright-links">
            <li className="footer__link">
              <a className="footer__author-link" href="https://practicum.yandex.ru" target="blank">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link">
              <a className="footer__author-link" href="https://github.com/lemonlemongit" target="blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

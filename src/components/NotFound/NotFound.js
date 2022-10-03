import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound__container">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link to="/" className="notFound__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;

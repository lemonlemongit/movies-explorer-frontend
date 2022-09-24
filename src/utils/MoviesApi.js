class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _headersJwt() {
    return {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      ...this.headers,
    };
  }

 getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
        headers: this._headers,
      }).then((res) => this._checkRes(res));
 }
  
}

export const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });
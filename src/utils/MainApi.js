class MainApi {
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
  
  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkRes(res));
  }

  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,

      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkRes(res));
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,

      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkRes(res));
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }).then((res) => this._checkRes(res));
  }

  saveUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkRes(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkRes(res));
  }

  removeBookmark(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkRes(res));
  }

  addBookmark(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        country: data.country || "unknown",
        director: data.director || "unknown",
        duration: data.duration || "No data",
        year: data.year || "unknown",
        description: data.description || "No description",
        image: data.image,
        trailerLink: data.trailerLink || "No trailerLink",
        thumbnail: data.image || "No image",
        movieId: data.id || "No data",
        nameRU: data.nameRU,
        nameEN: data.nameEN || "No name",
      }),
    }).then((res) => this._checkRes(res));
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.domainname.lemon.nomoredomains.sbs",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;

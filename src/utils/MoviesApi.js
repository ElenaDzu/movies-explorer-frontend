export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers,
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
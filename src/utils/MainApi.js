export const BASE_URL = "http://127.0.0.1:3000";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const register = ({ email, name, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: "POST",
    body: JSON.stringify({ email, name, password }),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: "POST",
    body: JSON.stringify({ password, email }),
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
};

export const changeUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
};

export const getUserMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
};

export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
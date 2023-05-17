
export const SearchError = {
  key_word: "Введите ключевое слово",
  not_saved: "У вас нет сохранённых фильмов",
  search_error: "Произошла ошибка, попробуйте обновить страницу.",
  not_found: "Ничего не найдено",
};

export const StatusError = {
  BAD_REQUEST: "Что-то пошло не так..."
}

export const FILM_DURATION = 40;
export const FOTO_URL = "https://api.nomoreparties.co";
export const REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const VALIDATOR = {
  name: {
    regex: "^[\\sa-zA-Zа-яА-ЯёЁ-]+$",
    message: "Имя может состоять из латиницы, кириллицы, пробела, дефиса",
  },
  email: {
    regex: "^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$",
    message: "Неверный Email-адрес",
  },
};

export const Numbercards = {
  mobile: 5,
  tablet: 8,
  desktop: 12,
};

export const Typescreen = {
  mobile: 480,
  tablet: 768,
  desktop: 1280,
};

export const standardizeFilms = (movies) => {
  return movies
    .map((movie) => ({
        country: movie.country || "unknown",
        director: movie.director || "unknown",
        duration: movie.duration || 60,
        year: movie.year || 2000,
        description: movie.description || "unknown",
        image: `${FOTO_URL}/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${FOTO_URL}/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || "unknown",
        nameEN: movie.nameEN || "unknown",
      }))
    .map((movie) => (
      REGEX.test(movie.trailerLink) ? movie : {...movie, trailerLink: movie.image}
    ));
};

export const filterFilms = (movies, keyWord, isShort) => {
  const word = keyWord.toLowerCase().trim();

  const searchedFilms = movies
    .filter((movie) => {
      const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();
      const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();
      return (ruName.match(word)) || (enName && enName.match(word));
    });

  if (isShort) {
    return searchedFilms.filter((movie) => movie.duration <= FILM_DURATION);
  }

  return searchedFilms;
};

export const SearchError = {
  KEY_WORD: "Введите ключевое слово",
  NOT_SAVED: "У вас нет сохранённых фильмов",
  SEARCH_ERROR: "Произошла ошибка, попробуйте обновить страницу.",
  NOT_FOUND: "Ничего не найдено",
};

export const StatusError = {
  BAD_REQUEST: "Что-то пошло не так..."
}

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

export const NUMBERCARDS = {
  mobile: 5,
  tablet: 8,
  desktop: 12,
};

export const TYPESCREEN = {
  mobile: 480,
  tablet: 1279,
  desktop: 1280,
};

export const standardizeFilms = (movies) => {
  return movies.map((movie) => {
    const {
      country = "unknown",
      director = "unknown",
      duration = 60,
      year = 2000,
      description = "unknown",
      image: { url: imageURL } = {},
      trailerLink,
      id: movieId,
      nameRU = "unknown",
      nameEN = "unknown",
    } = movie;

    const standardizedMovie = {
      country,
      director,
      duration,
      year,
      description,
      image: (`https://api.nomoreparties.co${imageURL}`),
      trailerLink,
      thumbnail: (`https://api.nomoreparties.co${imageURL}`),
      movieId,
      nameRU,
      nameEN,
    };

    if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(trailerLink)) {
      standardizedMovie.trailerLink = standardizedMovie.image;
    }

    return standardizedMovie;
  });
};

export const filterFilms = (movies, keyWord, isShort) => {
  const word = keyWord.toLowerCase().trim();

  const searchedFilms = movies.filter((movie) => {
    const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();
    const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();
    return ruName?.includes(word) || enName?.includes(word);
  });

  if (isShort) {
    const shortFilms = searchedFilms.filter((movie) => movie.duration <= 40);
    return shortFilms;
  }

  return searchedFilms;
};
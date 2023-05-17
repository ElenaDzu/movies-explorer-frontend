import { React, useContext } from "react";
import { useLocation } from "react-router-dom";
import { saveMovie, deleteMovie, getUserMovies } from "../../../utils/MainApi";
import cn from "classnames";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function MoviesCard({ card, saved, onError }) {
  const { setSavedMovies } = useContext(CurrentUserContext);
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  const { pathname } = useLocation();
  const cardBtnClassNames = cn("moviescard__btn", {
    moviescard__btn_like: pathname === "/movies" && saved.isSaved,
    moviescard__btn_unlike: pathname === "/movies" && !saved.isSaved,
    moviescard__btn_delete: pathname === "/saved-movies",
  });

  function handleClick() {
    if (saved.isSaved) {
      deleteMovie(saved.id)
        .then(() => {
            getUserMovies().then((data) => setSavedMovies(data));
        })
        .catch(() => {
          onError("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё».");
        });
    } else {
      saveMovie(card).then(() => {
        getUserMovies().then((data) => setSavedMovies(data));
      });
    }
  }

  return (
    <div className="moviescard" key={card.movieId}>
      <a className="moviescard__link" href={card.trailerLink} target='_blank' rel='noreferrer'>
      <img
        className="moviescard__image"
        src={card.thumbnail}
        alt="Постер к фильму"
      />
      </a>
      <div className="moviescard__block">
        <h2 className="moviescard__title">{card.nameRU}</h2>
        <button
          onClick={handleClick}
          className={cardBtnClassNames}
          type="button"
        ></button>
      </div>
      <p className="moviescard__duration">
        {hours ? `${hours} ч` : ""} {minutes} м
      </p>
    </div>
  );
}

export default MoviesCard;

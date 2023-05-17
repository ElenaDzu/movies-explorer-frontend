import { React, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import MoviesCard from "../MoviesCard/MoviesCard";
import { NUMBERCARDS, TYPESCREEN } from "../../../utils/constants";

function MoviesCardList({ movies, onError }) {
  const { savedMovies } = useContext(CurrentUserContext);
  const [isMoreBtn, setIsMoreBtn] = useState(false);
  const { pathname } = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sizeLength, setSizeLength] = useState(0);

  const onChangeWindow = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", onChangeWindow);
    return () => {
      window.removeEventListener("resize", onChangeWindow);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= TYPESCREEN.mobile) {
      setSizeLength(NUMBERCARDS.mobile);
    } else if (screenWidth <= TYPESCREEN.tablet) {
      setSizeLength(NUMBERCARDS.tablet);
    } else {
      setSizeLength(NUMBERCARDS.desktop);
    }
  }, [screenWidth, movies.length]);

  useEffect(() => {
    if (pathname === "/movies") {
      movies.length > sizeLength ? setIsMoreBtn(true) : setIsMoreBtn(false);
    } else {
      setIsMoreBtn(false);
    }
  }, [pathname, movies.length, sizeLength]);

  const onMoreBtnClick = () => {
    setSizeLength((current) => {
      if (screenWidth <= TYPESCREEN.tablet) {
        return current + 2;
      }
      return current + 3;
    });
  };

  const checkIsSaved = (card) => {
    const found = savedMovies.find((film) => film.movieId === card.movieId);
    if (found === undefined) {
      return { isSaved: false, id: "" };
    } else {
      return { isSaved: true, id: found._id };
    }
  };

  return (
    <div className="moviescardlist">
      <ul className="moviescardlist__list">
        {movies.slice(0, sizeLength).map((card) => (
          <MoviesCard
            key={card.movieId}
            card={card}
            onError={onError}
            saved={checkIsSaved(card)}
          />
        ))}
      </ul>
      {isMoreBtn ? (
        <div className="moviescardlist__more">
          <button
            className="moviescardlist__button"
            onClick={onMoreBtnClick}
            type="button"
          >
            Еще
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MoviesCardList;

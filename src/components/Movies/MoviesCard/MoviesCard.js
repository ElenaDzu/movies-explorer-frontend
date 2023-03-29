import { React } from "react";
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

function MoviesCard(card) {
  const { pathname } = useLocation();

  const cardBtnClassNames = cn('moviescard__btn', {
    'moviescard__btn_like': pathname === '/movies',
    'moviescard__btn_delete': pathname === '/saved-movies',
  });


  return (
    <div className="moviescard">
      <img
        className="moviescard__image"
        src={card.src}
        alt="Постер к фильму"
      ></img>
      <div className="moviescard__block">
        <h2 className="moviescard__title">{card.title}</h2>
        <button className={cardBtnClassNames} type="button"></button>
      </div>
      <p className="moviescard__duration">{card.duration}</p>
    </div>
  );
}

export default MoviesCard;

import { React } from "react";

function MoviesCard(card) {
    
    return (
        <div className="moviescard">
            <img className="moviescard__image" src={card.src} alt="Постер к фильму" ></img>
            <div className="moviescard__block">
                <h2 className="moviescard__title">{card.title}</h2>
                <button className="moviescard__like" type="button"></button>
            </div>
            <p className="moviescard__duration">{card.duration}</p>
        </div>
    );
}

export default MoviesCard;
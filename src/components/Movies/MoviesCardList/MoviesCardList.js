import { React } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import card1 from "../../../images/cardtest.svg";
import card2 from "../../../images/100des.svg";
import card7 from "../../../images/benksy.svg";
import card3 from "../../../images/museum.svg";
import card4 from "../../../images/blujacket.svg";
import card5 from "../../../images/oldappart.svg";
import card6 from "../../../images/threemen.svg";
import card8 from "../../../images/railway.svg";
import card9 from "../../../images/sport.svg";
import card10 from "../../../images/disco.svg";
import card11 from "../../../images/smoker.svg";
import card12 from "../../../images/itmen.svg";

function MoviesCardList() {

    const cardList = [ 
        {
            src: card1,
            title: "33 слова о дизайне",
            duration: "1ч 47м",
            _id: 1
        },
        {
            src: card2,
            title: "Киноальманах «100 лет дизайна»",
            duration: "1ч 3м",
            _id: 2
        },
        {
            src: card7,
            title: "В погоне за Бенкси»",
            duration: "1ч 42м",
            _id: 7
        },
        {
            src: card3,
            title: "Баския: Взрыв реальности",
            duration: "1ч 21м",
            _id: 3
        },
        {
            src: card4,
            title: "Бег это свобода",
            duration: "1ч 44м",
            _id: 4
        },
        {
            src: card5,
            title: "Книготорговцы»",
            duration: "1ч 37м",
            _id: 5
        },
        {
            src: card6,
            title: "Когда я думаю о Германии ночью",
            duration: "1ч 56м",
            _id: 6
        },
        {
            src: card8,
            title: "Gimme Danger: История Игги и The Stooge...",
            duration: "1ч 59м",
            _id: 8
        },
        // {
        //     src: card9,
        //     title: "Дженис: Маленькая девочка грустит",
        //     duration: "1ч 42м",
        //     _id: 9
        // },
        // {
        //     src: card10,
        //     title: "Соберись перед прыжком",
        //     duration: "1ч 10м",
        //     _id: 10
        // },
        // {
        //     src: card11,
        //     title: "Пи Джей Харви: A dog called money",
        //     duration: "1ч 4м",
        //     _id: 11
        // },
        // {
        //     src: card12,
        //     title: "По волнам: Искусство звука в кино",
        //     duration: "1ч 7м",
        //     _id: 12
        // }

    ]

    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__list">
            {cardList.map((card) => (
              <MoviesCard
                //onCardLike={onCardLike}
                //onCardClick={onCardClick}
                //onCardDelete={onCardDelete}
                src={card.src}
                duration={card.duration}
                title={card.title}
                key={card._id}
                card={card}
              />
            ))}
            </ul>
            <div className="moviescardlist__more">
              <button className="moviescardlist__button" type="button" >Еще</button>
              </div>
        </div>
    );
}

export default MoviesCardList;
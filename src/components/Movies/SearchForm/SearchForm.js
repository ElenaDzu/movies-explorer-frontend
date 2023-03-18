import { React } from "react";
import FindPath from "../../../images/find.svg";

function SearchForm() {
    return (
        <div className="searchform">
            <div className="searchform__form">
                <div className="searchform__inputform">
                  <input className="searchform__input" name="form" type="text" placeholder="Фильм"/>
                  <img className="searchform__image" alt="Иконка поисковика" src={FindPath}></img>
                </div>
                <div className="searchform filtercheckbox">
                    <p className="filtercheckbox__text">Короткометражки</p>
                    <button className="filtercheckbox__btn"></button>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
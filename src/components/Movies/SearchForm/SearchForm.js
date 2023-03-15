import { React } from "react";
//import { Route, Switch } from "react-router-dom";
import FindPath from "../../../images/find.svg";

function SearchForm() {
    return (
        <div className="searchform">
            <div className="searchform searchform__form">
                <input className="searchform searchform__input" name="form" type="text" placeholder="Фильм"></input>
                <img className="searchform searchform__image" alt="Иконка поисковика" src={FindPath}></img>
            </div>
        </div>
    );
}

export default SearchForm;
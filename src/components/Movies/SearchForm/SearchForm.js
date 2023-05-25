import { React, useState } from "react";
import FindPath from "../../../images/find.svg";
import { SearchError } from "../../../utils/constants";

function SearchForm({ handleClickCheckbox, handleClickSearch }) {
  const [query, setQuery] = useState(
    localStorage.getItem("storageKeyWord") ?? ""
  );

  const [error, setError] = useState("");

  const [isShort, setIsShort] = useState(
    localStorage.getItem("storageIsShort") === "true"
  );

  const onChange = (e) => {
    if (!e.target.value) {
      setError(SearchError.KEY_WORD);
      return;
    }
    setError("");
    setQuery(e.target.value);
    handleClickSearch(e.target.value);
  };

  const onCheckbox = (e) => {
    setIsShort(e.target.checked);
    handleClickCheckbox(e.target.checked);
  };

  return (
    <div className="searchform">
      <div className="searchform__form">
        <div className="searchform__inputform">
          <div className="searchform__errormessage">{error}</div>
          <input
            className="searchform__input"
            name="name"
            defaultValue={query}
            onChange={onChange}
            type="text"
            placeholder="Фильм"
          />
          <img
            className="searchform__image"
            alt="Иконка поисковика"
            src={FindPath}
          ></img>
        </div>
        <div className="filtercheckbox">
          <p className="filtercheckbox__text">Короткометражки</p>
          <input
            type="checkbox"
            checked={isShort}
            onChange={onCheckbox}
            className="filtercheckbox__btn"
            id="switch"
          />
          <label className="filtercheckbox__switch" htmlFor="switch"></label>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;

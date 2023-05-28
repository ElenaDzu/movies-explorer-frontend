import { React, useState } from "react";
import FindPath from "../../../images/find.svg";
import { SearchError } from "../../../utils/constants";

function SearchForm({ keyword, handleClickCheckbox, handleClickSearch }) {
  const [query, setQuery] = useState(
    localStorage.getItem(`${keyword}_storageKeyWord`) ?? ""
  );

  const [isBlocked, setIsBlocked] = useState(false);

  const [error, setError] = useState("");

  const [isShort, setIsShort] = useState(
    localStorage.getItem("storageIsShort") === "true"
  );

  const onChange = (e) => {
    if (e.type !== 'click'){
      setQuery(e.target.value);
    }
    if (e.code === 'Enter' || e.type === 'click') {
      if (!query) {
        setError(SearchError.KEY_WORD);
        return;
      }
      setError("");
      setIsBlocked(true);
      handleClickSearch(query);
      setIsBlocked(false);
    }
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
            onKeyUp={onChange}
            type="text"
            disabled={isBlocked}
            placeholder="Фильм"
          />
          <img
            className="searchform__image"
            alt="Иконка поисковика"
            onClick={onChange}
            src={FindPath}
            disabled={isBlocked}
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

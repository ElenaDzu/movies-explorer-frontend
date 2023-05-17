import { React, useContext, useState, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { SearchError, filterFilms } from "../../utils/constants";

const SavedMovies = ({ onError }) => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [searchFeatures, setSearchFeatures] = useState({
    keyWord: "",
    isShort: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const getFilteredFilms = (keyWord, isShort) => {
    const filteredFilms = filterFilms(savedMovies, keyWord, isShort);
    filteredFilms.length === 0
      ? setErrorMessage(SearchError.not_found)
      : setErrorMessage("");
    !savedMovies.length
      ? setErrorMessage(SearchError.not_saved)
      : setErrorMessage("");
    setMovies(filteredFilms);
  };

  useEffect(() => {
    setMovies(savedMovies);
    getFilteredFilms(searchFeatures.keyWord, searchFeatures.isShort);
    !savedMovies.length
      ? setErrorMessage(SearchError.not_saved)
      : setErrorMessage("");
  }, [savedMovies]);

  const handleClickSearch = (word) => {
    setSearchFeatures({ ...searchFeatures, keyWord: word });
    getFilteredFilms(word, searchFeatures.isShort);
  };

  const handleClickCheckbox = (isChecked) => {
    setSearchFeatures({ ...searchFeatures, isShort: isChecked });
    getFilteredFilms(searchFeatures.keyWord, isChecked);
  };

  const renderFilmsArray = () => {
    if (errorMessage.length) {
      return <p className="movies__search-message">{errorMessage}</p>;
    }
    return <MoviesCardList onError={onError} movies={movies} />;
  };

  return (
    <div className="savedmovies">
      <SearchForm
        handleClickSearch={handleClickSearch}
        handleClickCheckbox={handleClickCheckbox}
      />
      {renderFilmsArray()}
    </div>
  );
};

export default SavedMovies;

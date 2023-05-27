import { React, useContext, useState, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { SearchError, filterFilms } from "../../utils/constants";
import Preloader from "./Preloader/Preloader";

const SavedMovies = ({ onError }) => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchFeatures, setSearchFeatures] = useState({
    keyWord: "",
    isShort: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const getFilteredFilms = (keyWord, isShort) => {
  const filteredFilms = filterFilms(savedMovies, keyWord, isShort);
  if (filteredFilms.length === 0) {
    setErrorMessage(SearchError.NOT_FOUND);
  } else {
    setErrorMessage("");
  }
  if (!savedMovies.length) {
    setErrorMessage(SearchError.NOT_SAVED);
  } else {
    setErrorMessage("");
  }
  setMovies(filteredFilms);
};

  useEffect(() => {
    setMovies(savedMovies);
    getFilteredFilms(searchFeatures.keyWord, searchFeatures.isShort);
    if (!savedMovies.length) {
    setErrorMessage(SearchError.NOT_SAVED);
    } else {
    setErrorMessage("");
    }
    }, [savedMovies]);

  const handleClickSearch = (word) => {
    setSearchFeatures({ ...searchFeatures, keyWord: word });
    setIsProcessing(true);
    getFilteredFilms(word, searchFeatures.isShort);
  };

  const handleClickCheckbox = (isChecked) => {
    setSearchFeatures({ ...searchFeatures, isShort: isChecked });
    setIsProcessing(true);
    getFilteredFilms(searchFeatures.keyWord, isChecked);
  };

  const renderFilmsArray = () => {
    return errorMessage.length ? (
    <p className="movies__search-message">{errorMessage}</p>
    ) : (
    <MoviesCardList onError={onError} movies={movies} />
    );
    };

  return (
    <div className="savedmovies">
      <SearchForm
        handleClickSearch={handleClickSearch}
        handleClickCheckbox={handleClickCheckbox}
      />
      {isProcessing ? <Preloader /> : renderFilmsArray()}
    </div>
  );
};

export default SavedMovies;

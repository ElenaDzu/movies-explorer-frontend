import { React, useState, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import { SearchError, filterFilms } from "../../utils/constants";
import Preloader from "../Movies/Preloader/Preloader";
import { getUserMovies } from "../../utils/MainApi";

const SavedMovies = ({ onError }) => {
  const [ savedMovies, setSavedMovies ] = useState([]);
  useEffect(() => {
    getUserMovies()
    .then(data => {
      setSavedMovies(data);
    })
    .catch((err) => {
      onError(err);
      return;
    })
  }, []);

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
    localStorage.setItem('savedMovies_storageKeyWord', word);
    getFilteredFilms(word, searchFeatures.isShort);
    setIsProcessing(false);
  };

  const handleClickCheckbox = (isChecked) => {
    setSearchFeatures({ ...searchFeatures, isShort: isChecked });
    getFilteredFilms(searchFeatures.keyWord, isChecked);
  };

  const renderFilmsArray = () => {
    return errorMessage.length ? (
    <p className="movies__search-message">{errorMessage}</p>
    ) : (
    <MoviesCardList onError={onError} sMovies={setSavedMovies} movies={movies} />
    );
    };

  return (
    <div className="savedmovies">
      <SearchForm
        keyword='savedMovies'
        handleClickSearch={handleClickSearch}
        handleClickCheckbox={handleClickCheckbox}
        isProcessing={isProcessing}
      />
      {isProcessing ? <Preloader /> : renderFilmsArray()}
    </div>
  );
};

export default SavedMovies;

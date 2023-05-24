import { useState, useEffect } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { getMovies } from "../../utils/MoviesApi";
import { SearchError, standardizeFilms, filterFilms } from "../../utils/constants";
import Preloader from "./Preloader/Preloader";

function Movies() {
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(false);

  const storageAllFilms =
    JSON.parse(localStorage.getItem("storageAllFilms")) || [];

  useEffect(() => {
    const storageSearchedResult = JSON.parse(localStorage.getItem("storageSearchedResult")) || [];
    const storageKeyWord = localStorage.getItem("storageKeyWord") || "";
    const storageIsShort = JSON.parse(localStorage.getItem("storageIsShort")) || false;
    
    if (storageSearchedResult) {
    setSearchedFilms(storageSearchedResult);
    }
    if (storageKeyWord) {
    setKeyWord(storageKeyWord);
    }
    if (storageIsShort) {
    setIsShortFilms(storageIsShort);
    }
    }, []);

  const getFilteredFilms = (keyWord, isShortFilms) => {
    if (!storageAllFilms.length) {
      setIsProcessing(true);
      getMovies()
        .then((allMovies) => {
          const standardizedFilms = standardizeFilms(allMovies);
          localStorage.setItem(
            "storageAllFilms",
            JSON.stringify(standardizedFilms)
          );
          const filteredFilms = keyWord
            ? filterFilms(standardizedFilms, keyWord, isShortFilms)
            : [];
          handleFilterResult(filteredFilms);
        })
        .catch(() => {
          handleFilterResult([]);
          setErrorMessage(SearchError.SEARCH_ERROR);
        })
        .finally(() => setIsProcessing(false));
    } else {
      const filteredFilms = keyWord
        ? filterFilms(storageAllFilms, keyWord, isShortFilms)
        : [];
      handleFilterResult(filteredFilms);
    }
  };

  const handleFilterResult = (movies) => {
    setSearchedFilms(movies);
    localStorage.setItem("storageSearchedResult", JSON.stringify(movies));
    movies.length === 0
      ? setErrorMessage(SearchError.NOT_FOUND)
      : setErrorMessage("");
  };

  const handleClickSearch = (keyWord) => {
    if (keyWord === "") return;
    setKeyWord(keyWord);
    localStorage.setItem("storageKeyWord", keyWord);
    getFilteredFilms(keyWord, isShortFilms);
  };

  const handleClickCheckbox = (isChecked) => {
    setIsShortFilms(isChecked);
    localStorage.setItem("storageIsShort", isChecked);
    getFilteredFilms(keyWord, isChecked);
  };

  const renderFilmsArray = () => {
    if (errorMessage) {
      return <p className="movies__search-message">{SearchError.NOT_FOUND}</p>;
    } else if (errorMessage.err) {
      return (
        <p className="movies__search-message">{SearchError.SEARCH_ERROR}</p>
      );
    }
    return <MoviesCardList movies={searchedFilms} />;
  };

  return (
    <main>
      <SearchForm
        handleClickSearch={handleClickSearch}
        handleClickCheckbox={handleClickCheckbox}
      />
      {isProcessing ? <Preloader /> : renderFilmsArray()}
    </main>
  );
}

export default Movies;

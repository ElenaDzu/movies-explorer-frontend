import { React } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
//import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <div className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      {/* <Preloader></Preloader> */}
    </div>
  );
}

export default Movies;

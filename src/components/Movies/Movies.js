import { React } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";


function Movies() {
    
    return (
        <div className="movies">
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </div>
    );
}

export default Movies;